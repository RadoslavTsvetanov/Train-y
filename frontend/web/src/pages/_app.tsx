import { type AppType } from "next/app";
import { Geist } from "next/font/google";

import { api } from "trainy-frontend-web/utils/api";

import "trainy-frontend-web/styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={geist.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default api.withTRPC(MyApp);
