package com.antoan.trainy.nfc

import android.nfc.NdefMessage
import android.nfc.NdefRecord
import android.nfc.cardemulation.HostApduService
import android.os.Bundle
import android.util.Log

class MyHostApduService : HostApduService() {
    private val aidSelectNoLe = hex("00A4040007D2760000850101")
    private val aidSelectApdu = hex("00A4040007D2760000850101")

    private val ccSelectApdu   = hex("00A4000C02E103")
    private val ndefSelectApdu = hex("00A4000C02E104")

    private val readBinaryHeader = byteArrayOf(0x00.toByte(), 0xB0.toByte())

    private val statusOK = byteArrayOf(0x90.toByte(), 0x00.toByte())

    private val ccFile = byteArrayOf(
        0x00.toByte(), 0x0F.toByte(),
        0x20.toByte(),
        0x00.toByte(), 0x32.toByte(),
        0x00.toByte(), 0x32.toByte(),
        0x04.toByte(), 0x06.toByte(),
        0xE1.toByte(), 0x04.toByte(),
        0x00.toByte(), 0xFF.toByte(),
        0x00.toByte(), 0x00.toByte()
    )

    private val ndefFile: ByteArray by lazy {

        val payload = NdefMessage(arrayOf(
            NdefRecord.createUri("https://www.instagram.com/p/DIrpC4fvYh_/")
        )).toByteArray()

        val nlen = byteArrayOf(
            ((payload.size ushr 8) and 0xFF).toByte(),
            ( payload.size        and 0xFF).toByte()
        )

        nlen + payload
    }

    private var lastSelect = FileSelected.NONE

    override fun processCommandApdu(cmd: ByteArray, extras: Bundle?): ByteArray {
        if (cmd.size == aidSelectNoLe.size || cmd.size == aidSelectNoLe.size + 1) {
            if (cmd.sliceArray(0 until aidSelectNoLe.size).contentEquals(aidSelectNoLe)) {
                lastSelect = FileSelected.NONE
                return statusOK
            }
        }

        Log.d("HCE", "APDU in: ${cmd.joinToString("") { "%02X".format(it) }}")

        return when {
            cmd.contentEquals(aidSelectApdu) -> {
                lastSelect = FileSelected.NONE
                statusOK
            }
            cmd.contentEquals(ccSelectApdu) -> {
                lastSelect = FileSelected.CC
                ccFile + statusOK
            }
            cmd.contentEquals(ndefSelectApdu) -> {
                lastSelect = FileSelected.NDEF
                statusOK
            }
            cmd.size == 5 && cmd.sliceArray(0..1).contentEquals(readBinaryHeader) -> {
                val offset = ((cmd[2].toInt() and 0xFF) shl 8) or (cmd[3].toInt() and 0xFF)
                val length = cmd[4].toInt() and 0xFF

                val data = when (lastSelect) {
                    FileSelected.CC   -> ccFile
                    FileSelected.NDEF -> ndefFile
                    else              -> byteArrayOf()
                }

                val slice = data.sliceArray(offset until minOf(offset + length, data.size))
                Log.d("HCE", "READ ${lastSelect.name} @ $offset len $length → ${slice.size} bytes")
                slice + statusOK
            }
            else -> {
                Log.w("HCE", "Unhandled APDU")
                statusOK
            }
        }
    }

    override fun onDeactivated(reason: Int) {
        Log.d("HCE", "Deactivated: $reason")
    }

    private fun hex(s: String): ByteArray {
        require(s.length % 2 == 0)
        return ByteArray(s.length / 2) { i ->
            s.substring(2*i, 2*i+2).toInt(16).toByte()
        }
    }

    private enum class FileSelected { NONE, CC, NDEF }
}
