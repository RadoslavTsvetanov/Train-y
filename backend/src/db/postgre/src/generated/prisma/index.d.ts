
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Transport
 * 
 */
export type Transport = $Result.DefaultSelection<Prisma.$TransportPayload>
/**
 * Model TransportEvent
 * 
 */
export type TransportEvent = $Result.DefaultSelection<Prisma.$TransportEventPayload>
/**
 * Model RealtimeDataEntry
 * 
 */
export type RealtimeDataEntry = $Result.DefaultSelection<Prisma.$RealtimeDataEntryPayload>
/**
 * Model DataEntry
 * 
 */
export type DataEntry = $Result.DefaultSelection<Prisma.$DataEntryPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Forum
 * 
 */
export type Forum = $Result.DefaultSelection<Prisma.$ForumPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Transports
 * const transports = await prisma.transport.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Transports
   * const transports = await prisma.transport.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.transport`: Exposes CRUD operations for the **Transport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transports
    * const transports = await prisma.transport.findMany()
    * ```
    */
  get transport(): Prisma.TransportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transportEvent`: Exposes CRUD operations for the **TransportEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransportEvents
    * const transportEvents = await prisma.transportEvent.findMany()
    * ```
    */
  get transportEvent(): Prisma.TransportEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.realtimeDataEntry`: Exposes CRUD operations for the **RealtimeDataEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RealtimeDataEntries
    * const realtimeDataEntries = await prisma.realtimeDataEntry.findMany()
    * ```
    */
  get realtimeDataEntry(): Prisma.RealtimeDataEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataEntry`: Exposes CRUD operations for the **DataEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataEntries
    * const dataEntries = await prisma.dataEntry.findMany()
    * ```
    */
  get dataEntry(): Prisma.DataEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forum`: Exposes CRUD operations for the **Forum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forums
    * const forums = await prisma.forum.findMany()
    * ```
    */
  get forum(): Prisma.ForumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Transport: 'Transport',
    TransportEvent: 'TransportEvent',
    RealtimeDataEntry: 'RealtimeDataEntry',
    DataEntry: 'DataEntry',
    User: 'User',
    Forum: 'Forum',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "transport" | "transportEvent" | "realtimeDataEntry" | "dataEntry" | "user" | "forum" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Transport: {
        payload: Prisma.$TransportPayload<ExtArgs>
        fields: Prisma.TransportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          findFirst: {
            args: Prisma.TransportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          findMany: {
            args: Prisma.TransportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>[]
          }
          create: {
            args: Prisma.TransportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          createMany: {
            args: Prisma.TransportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>[]
          }
          delete: {
            args: Prisma.TransportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          update: {
            args: Prisma.TransportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          deleteMany: {
            args: Prisma.TransportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>[]
          }
          upsert: {
            args: Prisma.TransportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportPayload>
          }
          aggregate: {
            args: Prisma.TransportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransport>
          }
          groupBy: {
            args: Prisma.TransportGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransportGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransportCountArgs<ExtArgs>
            result: $Utils.Optional<TransportCountAggregateOutputType> | number
          }
        }
      }
      TransportEvent: {
        payload: Prisma.$TransportEventPayload<ExtArgs>
        fields: Prisma.TransportEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransportEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransportEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportEventPayload>
          }
          findFirst: {
            args: Prisma.TransportEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransportEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportEventPayload>
          }
          findMany: {
            args: Prisma.TransportEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportEventPayload>[]
          }
          create: {
            args: Prisma.TransportEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportEventPayload>
          }
          createMany: {
            args: Prisma.TransportEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransportEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportEventPayload>[]
          }
          delete: {
            args: Prisma.TransportEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportEventPayload>
          }
          update: {
            args: Prisma.TransportEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportEventPayload>
          }
          deleteMany: {
            args: Prisma.TransportEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransportEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransportEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportEventPayload>[]
          }
          upsert: {
            args: Prisma.TransportEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransportEventPayload>
          }
          aggregate: {
            args: Prisma.TransportEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransportEvent>
          }
          groupBy: {
            args: Prisma.TransportEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransportEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransportEventCountArgs<ExtArgs>
            result: $Utils.Optional<TransportEventCountAggregateOutputType> | number
          }
        }
      }
      RealtimeDataEntry: {
        payload: Prisma.$RealtimeDataEntryPayload<ExtArgs>
        fields: Prisma.RealtimeDataEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RealtimeDataEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtimeDataEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RealtimeDataEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtimeDataEntryPayload>
          }
          findFirst: {
            args: Prisma.RealtimeDataEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtimeDataEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RealtimeDataEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtimeDataEntryPayload>
          }
          findMany: {
            args: Prisma.RealtimeDataEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtimeDataEntryPayload>[]
          }
          create: {
            args: Prisma.RealtimeDataEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtimeDataEntryPayload>
          }
          createMany: {
            args: Prisma.RealtimeDataEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RealtimeDataEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtimeDataEntryPayload>[]
          }
          delete: {
            args: Prisma.RealtimeDataEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtimeDataEntryPayload>
          }
          update: {
            args: Prisma.RealtimeDataEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtimeDataEntryPayload>
          }
          deleteMany: {
            args: Prisma.RealtimeDataEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RealtimeDataEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RealtimeDataEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtimeDataEntryPayload>[]
          }
          upsert: {
            args: Prisma.RealtimeDataEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RealtimeDataEntryPayload>
          }
          aggregate: {
            args: Prisma.RealtimeDataEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRealtimeDataEntry>
          }
          groupBy: {
            args: Prisma.RealtimeDataEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RealtimeDataEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RealtimeDataEntryCountArgs<ExtArgs>
            result: $Utils.Optional<RealtimeDataEntryCountAggregateOutputType> | number
          }
        }
      }
      DataEntry: {
        payload: Prisma.$DataEntryPayload<ExtArgs>
        fields: Prisma.DataEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryPayload>
          }
          findFirst: {
            args: Prisma.DataEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryPayload>
          }
          findMany: {
            args: Prisma.DataEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryPayload>[]
          }
          create: {
            args: Prisma.DataEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryPayload>
          }
          createMany: {
            args: Prisma.DataEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DataEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryPayload>[]
          }
          delete: {
            args: Prisma.DataEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryPayload>
          }
          update: {
            args: Prisma.DataEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryPayload>
          }
          deleteMany: {
            args: Prisma.DataEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DataEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryPayload>[]
          }
          upsert: {
            args: Prisma.DataEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataEntryPayload>
          }
          aggregate: {
            args: Prisma.DataEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataEntry>
          }
          groupBy: {
            args: Prisma.DataEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataEntryCountArgs<ExtArgs>
            result: $Utils.Optional<DataEntryCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Forum: {
        payload: Prisma.$ForumPayload<ExtArgs>
        fields: Prisma.ForumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ForumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ForumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          findFirst: {
            args: Prisma.ForumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ForumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          findMany: {
            args: Prisma.ForumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>[]
          }
          create: {
            args: Prisma.ForumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          createMany: {
            args: Prisma.ForumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ForumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>[]
          }
          delete: {
            args: Prisma.ForumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          update: {
            args: Prisma.ForumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          deleteMany: {
            args: Prisma.ForumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ForumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ForumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>[]
          }
          upsert: {
            args: Prisma.ForumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ForumPayload>
          }
          aggregate: {
            args: Prisma.ForumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForum>
          }
          groupBy: {
            args: Prisma.ForumGroupByArgs<ExtArgs>
            result: $Utils.Optional<ForumGroupByOutputType>[]
          }
          count: {
            args: Prisma.ForumCountArgs<ExtArgs>
            result: $Utils.Optional<ForumCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    transport?: TransportOmit
    transportEvent?: TransportEventOmit
    realtimeDataEntry?: RealtimeDataEntryOmit
    dataEntry?: DataEntryOmit
    user?: UserOmit
    forum?: ForumOmit
    message?: MessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TransportCountOutputType
   */

  export type TransportCountOutputType = {
    events: number
    realtimeData: number
  }

  export type TransportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | TransportCountOutputTypeCountEventsArgs
    realtimeData?: boolean | TransportCountOutputTypeCountRealtimeDataArgs
  }

  // Custom InputTypes
  /**
   * TransportCountOutputType without action
   */
  export type TransportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportCountOutputType
     */
    select?: TransportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransportCountOutputType without action
   */
  export type TransportCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportEventWhereInput
  }

  /**
   * TransportCountOutputType without action
   */
  export type TransportCountOutputTypeCountRealtimeDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RealtimeDataEntryWhereInput
  }


  /**
   * Count Type DataEntryCountOutputType
   */

  export type DataEntryCountOutputType = {
    RealtimeDataEntry: number
  }

  export type DataEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RealtimeDataEntry?: boolean | DataEntryCountOutputTypeCountRealtimeDataEntryArgs
  }

  // Custom InputTypes
  /**
   * DataEntryCountOutputType without action
   */
  export type DataEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntryCountOutputType
     */
    select?: DataEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DataEntryCountOutputType without action
   */
  export type DataEntryCountOutputTypeCountRealtimeDataEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RealtimeDataEntryWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    messages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type ForumCountOutputType
   */

  export type ForumCountOutputType = {
    messages: number
  }

  export type ForumCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ForumCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ForumCountOutputType without action
   */
  export type ForumCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ForumCountOutputType
     */
    select?: ForumCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ForumCountOutputType without action
   */
  export type ForumCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Transport
   */

  export type AggregateTransport = {
    _count: TransportCountAggregateOutputType | null
    _min: TransportMinAggregateOutputType | null
    _max: TransportMaxAggregateOutputType | null
  }

  export type TransportMinAggregateOutputType = {
    id: string | null
    type: string | null
    line: string | null
  }

  export type TransportMaxAggregateOutputType = {
    id: string | null
    type: string | null
    line: string | null
  }

  export type TransportCountAggregateOutputType = {
    id: number
    type: number
    line: number
    _all: number
  }


  export type TransportMinAggregateInputType = {
    id?: true
    type?: true
    line?: true
  }

  export type TransportMaxAggregateInputType = {
    id?: true
    type?: true
    line?: true
  }

  export type TransportCountAggregateInputType = {
    id?: true
    type?: true
    line?: true
    _all?: true
  }

  export type TransportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transport to aggregate.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transports
    **/
    _count?: true | TransportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransportMaxAggregateInputType
  }

  export type GetTransportAggregateType<T extends TransportAggregateArgs> = {
        [P in keyof T & keyof AggregateTransport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransport[P]>
      : GetScalarType<T[P], AggregateTransport[P]>
  }




  export type TransportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportWhereInput
    orderBy?: TransportOrderByWithAggregationInput | TransportOrderByWithAggregationInput[]
    by: TransportScalarFieldEnum[] | TransportScalarFieldEnum
    having?: TransportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransportCountAggregateInputType | true
    _min?: TransportMinAggregateInputType
    _max?: TransportMaxAggregateInputType
  }

  export type TransportGroupByOutputType = {
    id: string
    type: string
    line: string
    _count: TransportCountAggregateOutputType | null
    _min: TransportMinAggregateOutputType | null
    _max: TransportMaxAggregateOutputType | null
  }

  type GetTransportGroupByPayload<T extends TransportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransportGroupByOutputType[P]>
            : GetScalarType<T[P], TransportGroupByOutputType[P]>
        }
      >
    >


  export type TransportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    line?: boolean
    events?: boolean | Transport$eventsArgs<ExtArgs>
    realtimeData?: boolean | Transport$realtimeDataArgs<ExtArgs>
    _count?: boolean | TransportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transport"]>

  export type TransportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    line?: boolean
  }, ExtArgs["result"]["transport"]>

  export type TransportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    line?: boolean
  }, ExtArgs["result"]["transport"]>

  export type TransportSelectScalar = {
    id?: boolean
    type?: boolean
    line?: boolean
  }

  export type TransportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "line", ExtArgs["result"]["transport"]>
  export type TransportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | Transport$eventsArgs<ExtArgs>
    realtimeData?: boolean | Transport$realtimeDataArgs<ExtArgs>
    _count?: boolean | TransportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TransportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TransportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transport"
    objects: {
      events: Prisma.$TransportEventPayload<ExtArgs>[]
      realtimeData: Prisma.$RealtimeDataEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      line: string
    }, ExtArgs["result"]["transport"]>
    composites: {}
  }

  type TransportGetPayload<S extends boolean | null | undefined | TransportDefaultArgs> = $Result.GetResult<Prisma.$TransportPayload, S>

  type TransportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransportCountAggregateInputType | true
    }

  export interface TransportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transport'], meta: { name: 'Transport' } }
    /**
     * Find zero or one Transport that matches the filter.
     * @param {TransportFindUniqueArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransportFindUniqueArgs>(args: SelectSubset<T, TransportFindUniqueArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransportFindUniqueOrThrowArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransportFindUniqueOrThrowArgs>(args: SelectSubset<T, TransportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportFindFirstArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransportFindFirstArgs>(args?: SelectSubset<T, TransportFindFirstArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportFindFirstOrThrowArgs} args - Arguments to find a Transport
     * @example
     * // Get one Transport
     * const transport = await prisma.transport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransportFindFirstOrThrowArgs>(args?: SelectSubset<T, TransportFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transports
     * const transports = await prisma.transport.findMany()
     * 
     * // Get first 10 Transports
     * const transports = await prisma.transport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transportWithIdOnly = await prisma.transport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransportFindManyArgs>(args?: SelectSubset<T, TransportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transport.
     * @param {TransportCreateArgs} args - Arguments to create a Transport.
     * @example
     * // Create one Transport
     * const Transport = await prisma.transport.create({
     *   data: {
     *     // ... data to create a Transport
     *   }
     * })
     * 
     */
    create<T extends TransportCreateArgs>(args: SelectSubset<T, TransportCreateArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transports.
     * @param {TransportCreateManyArgs} args - Arguments to create many Transports.
     * @example
     * // Create many Transports
     * const transport = await prisma.transport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransportCreateManyArgs>(args?: SelectSubset<T, TransportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transports and returns the data saved in the database.
     * @param {TransportCreateManyAndReturnArgs} args - Arguments to create many Transports.
     * @example
     * // Create many Transports
     * const transport = await prisma.transport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transports and only return the `id`
     * const transportWithIdOnly = await prisma.transport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransportCreateManyAndReturnArgs>(args?: SelectSubset<T, TransportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transport.
     * @param {TransportDeleteArgs} args - Arguments to delete one Transport.
     * @example
     * // Delete one Transport
     * const Transport = await prisma.transport.delete({
     *   where: {
     *     // ... filter to delete one Transport
     *   }
     * })
     * 
     */
    delete<T extends TransportDeleteArgs>(args: SelectSubset<T, TransportDeleteArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transport.
     * @param {TransportUpdateArgs} args - Arguments to update one Transport.
     * @example
     * // Update one Transport
     * const transport = await prisma.transport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransportUpdateArgs>(args: SelectSubset<T, TransportUpdateArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transports.
     * @param {TransportDeleteManyArgs} args - Arguments to filter Transports to delete.
     * @example
     * // Delete a few Transports
     * const { count } = await prisma.transport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransportDeleteManyArgs>(args?: SelectSubset<T, TransportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transports
     * const transport = await prisma.transport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransportUpdateManyArgs>(args: SelectSubset<T, TransportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transports and returns the data updated in the database.
     * @param {TransportUpdateManyAndReturnArgs} args - Arguments to update many Transports.
     * @example
     * // Update many Transports
     * const transport = await prisma.transport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transports and only return the `id`
     * const transportWithIdOnly = await prisma.transport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransportUpdateManyAndReturnArgs>(args: SelectSubset<T, TransportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transport.
     * @param {TransportUpsertArgs} args - Arguments to update or create a Transport.
     * @example
     * // Update or create a Transport
     * const transport = await prisma.transport.upsert({
     *   create: {
     *     // ... data to create a Transport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transport we want to update
     *   }
     * })
     */
    upsert<T extends TransportUpsertArgs>(args: SelectSubset<T, TransportUpsertArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportCountArgs} args - Arguments to filter Transports to count.
     * @example
     * // Count the number of Transports
     * const count = await prisma.transport.count({
     *   where: {
     *     // ... the filter for the Transports we want to count
     *   }
     * })
    **/
    count<T extends TransportCountArgs>(
      args?: Subset<T, TransportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransportAggregateArgs>(args: Subset<T, TransportAggregateArgs>): Prisma.PrismaPromise<GetTransportAggregateType<T>>

    /**
     * Group by Transport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransportGroupByArgs['orderBy'] }
        : { orderBy?: TransportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transport model
   */
  readonly fields: TransportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends Transport$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Transport$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    realtimeData<T extends Transport$realtimeDataArgs<ExtArgs> = {}>(args?: Subset<T, Transport$realtimeDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealtimeDataEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transport model
   */
  interface TransportFieldRefs {
    readonly id: FieldRef<"Transport", 'String'>
    readonly type: FieldRef<"Transport", 'String'>
    readonly line: FieldRef<"Transport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Transport findUnique
   */
  export type TransportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport findUniqueOrThrow
   */
  export type TransportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport findFirst
   */
  export type TransportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transports.
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transports.
     */
    distinct?: TransportScalarFieldEnum | TransportScalarFieldEnum[]
  }

  /**
   * Transport findFirstOrThrow
   */
  export type TransportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * Filter, which Transport to fetch.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transports.
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transports.
     */
    distinct?: TransportScalarFieldEnum | TransportScalarFieldEnum[]
  }

  /**
   * Transport findMany
   */
  export type TransportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * Filter, which Transports to fetch.
     */
    where?: TransportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transports to fetch.
     */
    orderBy?: TransportOrderByWithRelationInput | TransportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transports.
     */
    cursor?: TransportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transports.
     */
    skip?: number
    distinct?: TransportScalarFieldEnum | TransportScalarFieldEnum[]
  }

  /**
   * Transport create
   */
  export type TransportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * The data needed to create a Transport.
     */
    data: XOR<TransportCreateInput, TransportUncheckedCreateInput>
  }

  /**
   * Transport createMany
   */
  export type TransportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transports.
     */
    data: TransportCreateManyInput | TransportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transport createManyAndReturn
   */
  export type TransportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * The data used to create many Transports.
     */
    data: TransportCreateManyInput | TransportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transport update
   */
  export type TransportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * The data needed to update a Transport.
     */
    data: XOR<TransportUpdateInput, TransportUncheckedUpdateInput>
    /**
     * Choose, which Transport to update.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport updateMany
   */
  export type TransportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transports.
     */
    data: XOR<TransportUpdateManyMutationInput, TransportUncheckedUpdateManyInput>
    /**
     * Filter which Transports to update
     */
    where?: TransportWhereInput
    /**
     * Limit how many Transports to update.
     */
    limit?: number
  }

  /**
   * Transport updateManyAndReturn
   */
  export type TransportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * The data used to update Transports.
     */
    data: XOR<TransportUpdateManyMutationInput, TransportUncheckedUpdateManyInput>
    /**
     * Filter which Transports to update
     */
    where?: TransportWhereInput
    /**
     * Limit how many Transports to update.
     */
    limit?: number
  }

  /**
   * Transport upsert
   */
  export type TransportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * The filter to search for the Transport to update in case it exists.
     */
    where: TransportWhereUniqueInput
    /**
     * In case the Transport found by the `where` argument doesn't exist, create a new Transport with this data.
     */
    create: XOR<TransportCreateInput, TransportUncheckedCreateInput>
    /**
     * In case the Transport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransportUpdateInput, TransportUncheckedUpdateInput>
  }

  /**
   * Transport delete
   */
  export type TransportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
    /**
     * Filter which Transport to delete.
     */
    where: TransportWhereUniqueInput
  }

  /**
   * Transport deleteMany
   */
  export type TransportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transports to delete
     */
    where?: TransportWhereInput
    /**
     * Limit how many Transports to delete.
     */
    limit?: number
  }

  /**
   * Transport.events
   */
  export type Transport$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportEvent
     */
    select?: TransportEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportEvent
     */
    omit?: TransportEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportEventInclude<ExtArgs> | null
    where?: TransportEventWhereInput
    orderBy?: TransportEventOrderByWithRelationInput | TransportEventOrderByWithRelationInput[]
    cursor?: TransportEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransportEventScalarFieldEnum | TransportEventScalarFieldEnum[]
  }

  /**
   * Transport.realtimeData
   */
  export type Transport$realtimeDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtimeDataEntry
     */
    select?: RealtimeDataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtimeDataEntry
     */
    omit?: RealtimeDataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtimeDataEntryInclude<ExtArgs> | null
    where?: RealtimeDataEntryWhereInput
    orderBy?: RealtimeDataEntryOrderByWithRelationInput | RealtimeDataEntryOrderByWithRelationInput[]
    cursor?: RealtimeDataEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RealtimeDataEntryScalarFieldEnum | RealtimeDataEntryScalarFieldEnum[]
  }

  /**
   * Transport without action
   */
  export type TransportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transport
     */
    select?: TransportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transport
     */
    omit?: TransportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportInclude<ExtArgs> | null
  }


  /**
   * Model TransportEvent
   */

  export type AggregateTransportEvent = {
    _count: TransportEventCountAggregateOutputType | null
    _min: TransportEventMinAggregateOutputType | null
    _max: TransportEventMaxAggregateOutputType | null
  }

  export type TransportEventMinAggregateOutputType = {
    id: string | null
    transportId: string | null
    timestamp: Date | null
  }

  export type TransportEventMaxAggregateOutputType = {
    id: string | null
    transportId: string | null
    timestamp: Date | null
  }

  export type TransportEventCountAggregateOutputType = {
    id: number
    transportId: number
    timestamp: number
    payload: number
    _all: number
  }


  export type TransportEventMinAggregateInputType = {
    id?: true
    transportId?: true
    timestamp?: true
  }

  export type TransportEventMaxAggregateInputType = {
    id?: true
    transportId?: true
    timestamp?: true
  }

  export type TransportEventCountAggregateInputType = {
    id?: true
    transportId?: true
    timestamp?: true
    payload?: true
    _all?: true
  }

  export type TransportEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransportEvent to aggregate.
     */
    where?: TransportEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransportEvents to fetch.
     */
    orderBy?: TransportEventOrderByWithRelationInput | TransportEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransportEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransportEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransportEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransportEvents
    **/
    _count?: true | TransportEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransportEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransportEventMaxAggregateInputType
  }

  export type GetTransportEventAggregateType<T extends TransportEventAggregateArgs> = {
        [P in keyof T & keyof AggregateTransportEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransportEvent[P]>
      : GetScalarType<T[P], AggregateTransportEvent[P]>
  }




  export type TransportEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransportEventWhereInput
    orderBy?: TransportEventOrderByWithAggregationInput | TransportEventOrderByWithAggregationInput[]
    by: TransportEventScalarFieldEnum[] | TransportEventScalarFieldEnum
    having?: TransportEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransportEventCountAggregateInputType | true
    _min?: TransportEventMinAggregateInputType
    _max?: TransportEventMaxAggregateInputType
  }

  export type TransportEventGroupByOutputType = {
    id: string
    transportId: string
    timestamp: Date
    payload: JsonValue
    _count: TransportEventCountAggregateOutputType | null
    _min: TransportEventMinAggregateOutputType | null
    _max: TransportEventMaxAggregateOutputType | null
  }

  type GetTransportEventGroupByPayload<T extends TransportEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransportEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransportEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransportEventGroupByOutputType[P]>
            : GetScalarType<T[P], TransportEventGroupByOutputType[P]>
        }
      >
    >


  export type TransportEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transportId?: boolean
    timestamp?: boolean
    payload?: boolean
    transport?: boolean | TransportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transportEvent"]>

  export type TransportEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transportId?: boolean
    timestamp?: boolean
    payload?: boolean
    transport?: boolean | TransportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transportEvent"]>

  export type TransportEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transportId?: boolean
    timestamp?: boolean
    payload?: boolean
    transport?: boolean | TransportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transportEvent"]>

  export type TransportEventSelectScalar = {
    id?: boolean
    transportId?: boolean
    timestamp?: boolean
    payload?: boolean
  }

  export type TransportEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transportId" | "timestamp" | "payload", ExtArgs["result"]["transportEvent"]>
  export type TransportEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transport?: boolean | TransportDefaultArgs<ExtArgs>
  }
  export type TransportEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transport?: boolean | TransportDefaultArgs<ExtArgs>
  }
  export type TransportEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transport?: boolean | TransportDefaultArgs<ExtArgs>
  }

  export type $TransportEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransportEvent"
    objects: {
      transport: Prisma.$TransportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      transportId: string
      timestamp: Date
      payload: Prisma.JsonValue
    }, ExtArgs["result"]["transportEvent"]>
    composites: {}
  }

  type TransportEventGetPayload<S extends boolean | null | undefined | TransportEventDefaultArgs> = $Result.GetResult<Prisma.$TransportEventPayload, S>

  type TransportEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransportEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransportEventCountAggregateInputType | true
    }

  export interface TransportEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransportEvent'], meta: { name: 'TransportEvent' } }
    /**
     * Find zero or one TransportEvent that matches the filter.
     * @param {TransportEventFindUniqueArgs} args - Arguments to find a TransportEvent
     * @example
     * // Get one TransportEvent
     * const transportEvent = await prisma.transportEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransportEventFindUniqueArgs>(args: SelectSubset<T, TransportEventFindUniqueArgs<ExtArgs>>): Prisma__TransportEventClient<$Result.GetResult<Prisma.$TransportEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransportEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransportEventFindUniqueOrThrowArgs} args - Arguments to find a TransportEvent
     * @example
     * // Get one TransportEvent
     * const transportEvent = await prisma.transportEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransportEventFindUniqueOrThrowArgs>(args: SelectSubset<T, TransportEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransportEventClient<$Result.GetResult<Prisma.$TransportEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransportEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportEventFindFirstArgs} args - Arguments to find a TransportEvent
     * @example
     * // Get one TransportEvent
     * const transportEvent = await prisma.transportEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransportEventFindFirstArgs>(args?: SelectSubset<T, TransportEventFindFirstArgs<ExtArgs>>): Prisma__TransportEventClient<$Result.GetResult<Prisma.$TransportEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransportEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportEventFindFirstOrThrowArgs} args - Arguments to find a TransportEvent
     * @example
     * // Get one TransportEvent
     * const transportEvent = await prisma.transportEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransportEventFindFirstOrThrowArgs>(args?: SelectSubset<T, TransportEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransportEventClient<$Result.GetResult<Prisma.$TransportEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransportEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransportEvents
     * const transportEvents = await prisma.transportEvent.findMany()
     * 
     * // Get first 10 TransportEvents
     * const transportEvents = await prisma.transportEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transportEventWithIdOnly = await prisma.transportEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransportEventFindManyArgs>(args?: SelectSubset<T, TransportEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransportEvent.
     * @param {TransportEventCreateArgs} args - Arguments to create a TransportEvent.
     * @example
     * // Create one TransportEvent
     * const TransportEvent = await prisma.transportEvent.create({
     *   data: {
     *     // ... data to create a TransportEvent
     *   }
     * })
     * 
     */
    create<T extends TransportEventCreateArgs>(args: SelectSubset<T, TransportEventCreateArgs<ExtArgs>>): Prisma__TransportEventClient<$Result.GetResult<Prisma.$TransportEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransportEvents.
     * @param {TransportEventCreateManyArgs} args - Arguments to create many TransportEvents.
     * @example
     * // Create many TransportEvents
     * const transportEvent = await prisma.transportEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransportEventCreateManyArgs>(args?: SelectSubset<T, TransportEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransportEvents and returns the data saved in the database.
     * @param {TransportEventCreateManyAndReturnArgs} args - Arguments to create many TransportEvents.
     * @example
     * // Create many TransportEvents
     * const transportEvent = await prisma.transportEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransportEvents and only return the `id`
     * const transportEventWithIdOnly = await prisma.transportEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransportEventCreateManyAndReturnArgs>(args?: SelectSubset<T, TransportEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransportEvent.
     * @param {TransportEventDeleteArgs} args - Arguments to delete one TransportEvent.
     * @example
     * // Delete one TransportEvent
     * const TransportEvent = await prisma.transportEvent.delete({
     *   where: {
     *     // ... filter to delete one TransportEvent
     *   }
     * })
     * 
     */
    delete<T extends TransportEventDeleteArgs>(args: SelectSubset<T, TransportEventDeleteArgs<ExtArgs>>): Prisma__TransportEventClient<$Result.GetResult<Prisma.$TransportEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransportEvent.
     * @param {TransportEventUpdateArgs} args - Arguments to update one TransportEvent.
     * @example
     * // Update one TransportEvent
     * const transportEvent = await prisma.transportEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransportEventUpdateArgs>(args: SelectSubset<T, TransportEventUpdateArgs<ExtArgs>>): Prisma__TransportEventClient<$Result.GetResult<Prisma.$TransportEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransportEvents.
     * @param {TransportEventDeleteManyArgs} args - Arguments to filter TransportEvents to delete.
     * @example
     * // Delete a few TransportEvents
     * const { count } = await prisma.transportEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransportEventDeleteManyArgs>(args?: SelectSubset<T, TransportEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransportEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransportEvents
     * const transportEvent = await prisma.transportEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransportEventUpdateManyArgs>(args: SelectSubset<T, TransportEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransportEvents and returns the data updated in the database.
     * @param {TransportEventUpdateManyAndReturnArgs} args - Arguments to update many TransportEvents.
     * @example
     * // Update many TransportEvents
     * const transportEvent = await prisma.transportEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransportEvents and only return the `id`
     * const transportEventWithIdOnly = await prisma.transportEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransportEventUpdateManyAndReturnArgs>(args: SelectSubset<T, TransportEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransportEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransportEvent.
     * @param {TransportEventUpsertArgs} args - Arguments to update or create a TransportEvent.
     * @example
     * // Update or create a TransportEvent
     * const transportEvent = await prisma.transportEvent.upsert({
     *   create: {
     *     // ... data to create a TransportEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransportEvent we want to update
     *   }
     * })
     */
    upsert<T extends TransportEventUpsertArgs>(args: SelectSubset<T, TransportEventUpsertArgs<ExtArgs>>): Prisma__TransportEventClient<$Result.GetResult<Prisma.$TransportEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransportEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportEventCountArgs} args - Arguments to filter TransportEvents to count.
     * @example
     * // Count the number of TransportEvents
     * const count = await prisma.transportEvent.count({
     *   where: {
     *     // ... the filter for the TransportEvents we want to count
     *   }
     * })
    **/
    count<T extends TransportEventCountArgs>(
      args?: Subset<T, TransportEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransportEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransportEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransportEventAggregateArgs>(args: Subset<T, TransportEventAggregateArgs>): Prisma.PrismaPromise<GetTransportEventAggregateType<T>>

    /**
     * Group by TransportEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransportEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransportEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransportEventGroupByArgs['orderBy'] }
        : { orderBy?: TransportEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransportEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransportEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransportEvent model
   */
  readonly fields: TransportEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransportEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransportEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transport<T extends TransportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransportDefaultArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransportEvent model
   */
  interface TransportEventFieldRefs {
    readonly id: FieldRef<"TransportEvent", 'String'>
    readonly transportId: FieldRef<"TransportEvent", 'String'>
    readonly timestamp: FieldRef<"TransportEvent", 'DateTime'>
    readonly payload: FieldRef<"TransportEvent", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * TransportEvent findUnique
   */
  export type TransportEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportEvent
     */
    select?: TransportEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportEvent
     */
    omit?: TransportEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportEventInclude<ExtArgs> | null
    /**
     * Filter, which TransportEvent to fetch.
     */
    where: TransportEventWhereUniqueInput
  }

  /**
   * TransportEvent findUniqueOrThrow
   */
  export type TransportEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportEvent
     */
    select?: TransportEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportEvent
     */
    omit?: TransportEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportEventInclude<ExtArgs> | null
    /**
     * Filter, which TransportEvent to fetch.
     */
    where: TransportEventWhereUniqueInput
  }

  /**
   * TransportEvent findFirst
   */
  export type TransportEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportEvent
     */
    select?: TransportEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportEvent
     */
    omit?: TransportEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportEventInclude<ExtArgs> | null
    /**
     * Filter, which TransportEvent to fetch.
     */
    where?: TransportEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransportEvents to fetch.
     */
    orderBy?: TransportEventOrderByWithRelationInput | TransportEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransportEvents.
     */
    cursor?: TransportEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransportEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransportEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransportEvents.
     */
    distinct?: TransportEventScalarFieldEnum | TransportEventScalarFieldEnum[]
  }

  /**
   * TransportEvent findFirstOrThrow
   */
  export type TransportEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportEvent
     */
    select?: TransportEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportEvent
     */
    omit?: TransportEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportEventInclude<ExtArgs> | null
    /**
     * Filter, which TransportEvent to fetch.
     */
    where?: TransportEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransportEvents to fetch.
     */
    orderBy?: TransportEventOrderByWithRelationInput | TransportEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransportEvents.
     */
    cursor?: TransportEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransportEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransportEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransportEvents.
     */
    distinct?: TransportEventScalarFieldEnum | TransportEventScalarFieldEnum[]
  }

  /**
   * TransportEvent findMany
   */
  export type TransportEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportEvent
     */
    select?: TransportEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportEvent
     */
    omit?: TransportEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportEventInclude<ExtArgs> | null
    /**
     * Filter, which TransportEvents to fetch.
     */
    where?: TransportEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransportEvents to fetch.
     */
    orderBy?: TransportEventOrderByWithRelationInput | TransportEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransportEvents.
     */
    cursor?: TransportEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransportEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransportEvents.
     */
    skip?: number
    distinct?: TransportEventScalarFieldEnum | TransportEventScalarFieldEnum[]
  }

  /**
   * TransportEvent create
   */
  export type TransportEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportEvent
     */
    select?: TransportEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportEvent
     */
    omit?: TransportEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportEventInclude<ExtArgs> | null
    /**
     * The data needed to create a TransportEvent.
     */
    data: XOR<TransportEventCreateInput, TransportEventUncheckedCreateInput>
  }

  /**
   * TransportEvent createMany
   */
  export type TransportEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransportEvents.
     */
    data: TransportEventCreateManyInput | TransportEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransportEvent createManyAndReturn
   */
  export type TransportEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportEvent
     */
    select?: TransportEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransportEvent
     */
    omit?: TransportEventOmit<ExtArgs> | null
    /**
     * The data used to create many TransportEvents.
     */
    data: TransportEventCreateManyInput | TransportEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransportEvent update
   */
  export type TransportEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportEvent
     */
    select?: TransportEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportEvent
     */
    omit?: TransportEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportEventInclude<ExtArgs> | null
    /**
     * The data needed to update a TransportEvent.
     */
    data: XOR<TransportEventUpdateInput, TransportEventUncheckedUpdateInput>
    /**
     * Choose, which TransportEvent to update.
     */
    where: TransportEventWhereUniqueInput
  }

  /**
   * TransportEvent updateMany
   */
  export type TransportEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransportEvents.
     */
    data: XOR<TransportEventUpdateManyMutationInput, TransportEventUncheckedUpdateManyInput>
    /**
     * Filter which TransportEvents to update
     */
    where?: TransportEventWhereInput
    /**
     * Limit how many TransportEvents to update.
     */
    limit?: number
  }

  /**
   * TransportEvent updateManyAndReturn
   */
  export type TransportEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportEvent
     */
    select?: TransportEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransportEvent
     */
    omit?: TransportEventOmit<ExtArgs> | null
    /**
     * The data used to update TransportEvents.
     */
    data: XOR<TransportEventUpdateManyMutationInput, TransportEventUncheckedUpdateManyInput>
    /**
     * Filter which TransportEvents to update
     */
    where?: TransportEventWhereInput
    /**
     * Limit how many TransportEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransportEvent upsert
   */
  export type TransportEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportEvent
     */
    select?: TransportEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportEvent
     */
    omit?: TransportEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportEventInclude<ExtArgs> | null
    /**
     * The filter to search for the TransportEvent to update in case it exists.
     */
    where: TransportEventWhereUniqueInput
    /**
     * In case the TransportEvent found by the `where` argument doesn't exist, create a new TransportEvent with this data.
     */
    create: XOR<TransportEventCreateInput, TransportEventUncheckedCreateInput>
    /**
     * In case the TransportEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransportEventUpdateInput, TransportEventUncheckedUpdateInput>
  }

  /**
   * TransportEvent delete
   */
  export type TransportEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportEvent
     */
    select?: TransportEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportEvent
     */
    omit?: TransportEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportEventInclude<ExtArgs> | null
    /**
     * Filter which TransportEvent to delete.
     */
    where: TransportEventWhereUniqueInput
  }

  /**
   * TransportEvent deleteMany
   */
  export type TransportEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransportEvents to delete
     */
    where?: TransportEventWhereInput
    /**
     * Limit how many TransportEvents to delete.
     */
    limit?: number
  }

  /**
   * TransportEvent without action
   */
  export type TransportEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransportEvent
     */
    select?: TransportEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransportEvent
     */
    omit?: TransportEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransportEventInclude<ExtArgs> | null
  }


  /**
   * Model RealtimeDataEntry
   */

  export type AggregateRealtimeDataEntry = {
    _count: RealtimeDataEntryCountAggregateOutputType | null
    _min: RealtimeDataEntryMinAggregateOutputType | null
    _max: RealtimeDataEntryMaxAggregateOutputType | null
  }

  export type RealtimeDataEntryMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    transportId: string | null
    dataEntryId: string | null
  }

  export type RealtimeDataEntryMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    transportId: string | null
    dataEntryId: string | null
  }

  export type RealtimeDataEntryCountAggregateOutputType = {
    id: number
    timestamp: number
    transportId: number
    dataEntryId: number
    _all: number
  }


  export type RealtimeDataEntryMinAggregateInputType = {
    id?: true
    timestamp?: true
    transportId?: true
    dataEntryId?: true
  }

  export type RealtimeDataEntryMaxAggregateInputType = {
    id?: true
    timestamp?: true
    transportId?: true
    dataEntryId?: true
  }

  export type RealtimeDataEntryCountAggregateInputType = {
    id?: true
    timestamp?: true
    transportId?: true
    dataEntryId?: true
    _all?: true
  }

  export type RealtimeDataEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RealtimeDataEntry to aggregate.
     */
    where?: RealtimeDataEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealtimeDataEntries to fetch.
     */
    orderBy?: RealtimeDataEntryOrderByWithRelationInput | RealtimeDataEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RealtimeDataEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealtimeDataEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealtimeDataEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RealtimeDataEntries
    **/
    _count?: true | RealtimeDataEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RealtimeDataEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RealtimeDataEntryMaxAggregateInputType
  }

  export type GetRealtimeDataEntryAggregateType<T extends RealtimeDataEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateRealtimeDataEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRealtimeDataEntry[P]>
      : GetScalarType<T[P], AggregateRealtimeDataEntry[P]>
  }




  export type RealtimeDataEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RealtimeDataEntryWhereInput
    orderBy?: RealtimeDataEntryOrderByWithAggregationInput | RealtimeDataEntryOrderByWithAggregationInput[]
    by: RealtimeDataEntryScalarFieldEnum[] | RealtimeDataEntryScalarFieldEnum
    having?: RealtimeDataEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RealtimeDataEntryCountAggregateInputType | true
    _min?: RealtimeDataEntryMinAggregateInputType
    _max?: RealtimeDataEntryMaxAggregateInputType
  }

  export type RealtimeDataEntryGroupByOutputType = {
    id: string
    timestamp: Date
    transportId: string
    dataEntryId: string
    _count: RealtimeDataEntryCountAggregateOutputType | null
    _min: RealtimeDataEntryMinAggregateOutputType | null
    _max: RealtimeDataEntryMaxAggregateOutputType | null
  }

  type GetRealtimeDataEntryGroupByPayload<T extends RealtimeDataEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RealtimeDataEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RealtimeDataEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RealtimeDataEntryGroupByOutputType[P]>
            : GetScalarType<T[P], RealtimeDataEntryGroupByOutputType[P]>
        }
      >
    >


  export type RealtimeDataEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    transportId?: boolean
    dataEntryId?: boolean
    transport?: boolean | TransportDefaultArgs<ExtArgs>
    dataEntry?: boolean | DataEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["realtimeDataEntry"]>

  export type RealtimeDataEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    transportId?: boolean
    dataEntryId?: boolean
    transport?: boolean | TransportDefaultArgs<ExtArgs>
    dataEntry?: boolean | DataEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["realtimeDataEntry"]>

  export type RealtimeDataEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    transportId?: boolean
    dataEntryId?: boolean
    transport?: boolean | TransportDefaultArgs<ExtArgs>
    dataEntry?: boolean | DataEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["realtimeDataEntry"]>

  export type RealtimeDataEntrySelectScalar = {
    id?: boolean
    timestamp?: boolean
    transportId?: boolean
    dataEntryId?: boolean
  }

  export type RealtimeDataEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "transportId" | "dataEntryId", ExtArgs["result"]["realtimeDataEntry"]>
  export type RealtimeDataEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transport?: boolean | TransportDefaultArgs<ExtArgs>
    dataEntry?: boolean | DataEntryDefaultArgs<ExtArgs>
  }
  export type RealtimeDataEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transport?: boolean | TransportDefaultArgs<ExtArgs>
    dataEntry?: boolean | DataEntryDefaultArgs<ExtArgs>
  }
  export type RealtimeDataEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transport?: boolean | TransportDefaultArgs<ExtArgs>
    dataEntry?: boolean | DataEntryDefaultArgs<ExtArgs>
  }

  export type $RealtimeDataEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RealtimeDataEntry"
    objects: {
      transport: Prisma.$TransportPayload<ExtArgs>
      dataEntry: Prisma.$DataEntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      transportId: string
      dataEntryId: string
    }, ExtArgs["result"]["realtimeDataEntry"]>
    composites: {}
  }

  type RealtimeDataEntryGetPayload<S extends boolean | null | undefined | RealtimeDataEntryDefaultArgs> = $Result.GetResult<Prisma.$RealtimeDataEntryPayload, S>

  type RealtimeDataEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RealtimeDataEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RealtimeDataEntryCountAggregateInputType | true
    }

  export interface RealtimeDataEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RealtimeDataEntry'], meta: { name: 'RealtimeDataEntry' } }
    /**
     * Find zero or one RealtimeDataEntry that matches the filter.
     * @param {RealtimeDataEntryFindUniqueArgs} args - Arguments to find a RealtimeDataEntry
     * @example
     * // Get one RealtimeDataEntry
     * const realtimeDataEntry = await prisma.realtimeDataEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RealtimeDataEntryFindUniqueArgs>(args: SelectSubset<T, RealtimeDataEntryFindUniqueArgs<ExtArgs>>): Prisma__RealtimeDataEntryClient<$Result.GetResult<Prisma.$RealtimeDataEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RealtimeDataEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RealtimeDataEntryFindUniqueOrThrowArgs} args - Arguments to find a RealtimeDataEntry
     * @example
     * // Get one RealtimeDataEntry
     * const realtimeDataEntry = await prisma.realtimeDataEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RealtimeDataEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, RealtimeDataEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RealtimeDataEntryClient<$Result.GetResult<Prisma.$RealtimeDataEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RealtimeDataEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeDataEntryFindFirstArgs} args - Arguments to find a RealtimeDataEntry
     * @example
     * // Get one RealtimeDataEntry
     * const realtimeDataEntry = await prisma.realtimeDataEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RealtimeDataEntryFindFirstArgs>(args?: SelectSubset<T, RealtimeDataEntryFindFirstArgs<ExtArgs>>): Prisma__RealtimeDataEntryClient<$Result.GetResult<Prisma.$RealtimeDataEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RealtimeDataEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeDataEntryFindFirstOrThrowArgs} args - Arguments to find a RealtimeDataEntry
     * @example
     * // Get one RealtimeDataEntry
     * const realtimeDataEntry = await prisma.realtimeDataEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RealtimeDataEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, RealtimeDataEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RealtimeDataEntryClient<$Result.GetResult<Prisma.$RealtimeDataEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RealtimeDataEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeDataEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RealtimeDataEntries
     * const realtimeDataEntries = await prisma.realtimeDataEntry.findMany()
     * 
     * // Get first 10 RealtimeDataEntries
     * const realtimeDataEntries = await prisma.realtimeDataEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const realtimeDataEntryWithIdOnly = await prisma.realtimeDataEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RealtimeDataEntryFindManyArgs>(args?: SelectSubset<T, RealtimeDataEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealtimeDataEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RealtimeDataEntry.
     * @param {RealtimeDataEntryCreateArgs} args - Arguments to create a RealtimeDataEntry.
     * @example
     * // Create one RealtimeDataEntry
     * const RealtimeDataEntry = await prisma.realtimeDataEntry.create({
     *   data: {
     *     // ... data to create a RealtimeDataEntry
     *   }
     * })
     * 
     */
    create<T extends RealtimeDataEntryCreateArgs>(args: SelectSubset<T, RealtimeDataEntryCreateArgs<ExtArgs>>): Prisma__RealtimeDataEntryClient<$Result.GetResult<Prisma.$RealtimeDataEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RealtimeDataEntries.
     * @param {RealtimeDataEntryCreateManyArgs} args - Arguments to create many RealtimeDataEntries.
     * @example
     * // Create many RealtimeDataEntries
     * const realtimeDataEntry = await prisma.realtimeDataEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RealtimeDataEntryCreateManyArgs>(args?: SelectSubset<T, RealtimeDataEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RealtimeDataEntries and returns the data saved in the database.
     * @param {RealtimeDataEntryCreateManyAndReturnArgs} args - Arguments to create many RealtimeDataEntries.
     * @example
     * // Create many RealtimeDataEntries
     * const realtimeDataEntry = await prisma.realtimeDataEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RealtimeDataEntries and only return the `id`
     * const realtimeDataEntryWithIdOnly = await prisma.realtimeDataEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RealtimeDataEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, RealtimeDataEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealtimeDataEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RealtimeDataEntry.
     * @param {RealtimeDataEntryDeleteArgs} args - Arguments to delete one RealtimeDataEntry.
     * @example
     * // Delete one RealtimeDataEntry
     * const RealtimeDataEntry = await prisma.realtimeDataEntry.delete({
     *   where: {
     *     // ... filter to delete one RealtimeDataEntry
     *   }
     * })
     * 
     */
    delete<T extends RealtimeDataEntryDeleteArgs>(args: SelectSubset<T, RealtimeDataEntryDeleteArgs<ExtArgs>>): Prisma__RealtimeDataEntryClient<$Result.GetResult<Prisma.$RealtimeDataEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RealtimeDataEntry.
     * @param {RealtimeDataEntryUpdateArgs} args - Arguments to update one RealtimeDataEntry.
     * @example
     * // Update one RealtimeDataEntry
     * const realtimeDataEntry = await prisma.realtimeDataEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RealtimeDataEntryUpdateArgs>(args: SelectSubset<T, RealtimeDataEntryUpdateArgs<ExtArgs>>): Prisma__RealtimeDataEntryClient<$Result.GetResult<Prisma.$RealtimeDataEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RealtimeDataEntries.
     * @param {RealtimeDataEntryDeleteManyArgs} args - Arguments to filter RealtimeDataEntries to delete.
     * @example
     * // Delete a few RealtimeDataEntries
     * const { count } = await prisma.realtimeDataEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RealtimeDataEntryDeleteManyArgs>(args?: SelectSubset<T, RealtimeDataEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RealtimeDataEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeDataEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RealtimeDataEntries
     * const realtimeDataEntry = await prisma.realtimeDataEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RealtimeDataEntryUpdateManyArgs>(args: SelectSubset<T, RealtimeDataEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RealtimeDataEntries and returns the data updated in the database.
     * @param {RealtimeDataEntryUpdateManyAndReturnArgs} args - Arguments to update many RealtimeDataEntries.
     * @example
     * // Update many RealtimeDataEntries
     * const realtimeDataEntry = await prisma.realtimeDataEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RealtimeDataEntries and only return the `id`
     * const realtimeDataEntryWithIdOnly = await prisma.realtimeDataEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RealtimeDataEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, RealtimeDataEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealtimeDataEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RealtimeDataEntry.
     * @param {RealtimeDataEntryUpsertArgs} args - Arguments to update or create a RealtimeDataEntry.
     * @example
     * // Update or create a RealtimeDataEntry
     * const realtimeDataEntry = await prisma.realtimeDataEntry.upsert({
     *   create: {
     *     // ... data to create a RealtimeDataEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RealtimeDataEntry we want to update
     *   }
     * })
     */
    upsert<T extends RealtimeDataEntryUpsertArgs>(args: SelectSubset<T, RealtimeDataEntryUpsertArgs<ExtArgs>>): Prisma__RealtimeDataEntryClient<$Result.GetResult<Prisma.$RealtimeDataEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RealtimeDataEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeDataEntryCountArgs} args - Arguments to filter RealtimeDataEntries to count.
     * @example
     * // Count the number of RealtimeDataEntries
     * const count = await prisma.realtimeDataEntry.count({
     *   where: {
     *     // ... the filter for the RealtimeDataEntries we want to count
     *   }
     * })
    **/
    count<T extends RealtimeDataEntryCountArgs>(
      args?: Subset<T, RealtimeDataEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RealtimeDataEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RealtimeDataEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeDataEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RealtimeDataEntryAggregateArgs>(args: Subset<T, RealtimeDataEntryAggregateArgs>): Prisma.PrismaPromise<GetRealtimeDataEntryAggregateType<T>>

    /**
     * Group by RealtimeDataEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeDataEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RealtimeDataEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RealtimeDataEntryGroupByArgs['orderBy'] }
        : { orderBy?: RealtimeDataEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RealtimeDataEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRealtimeDataEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RealtimeDataEntry model
   */
  readonly fields: RealtimeDataEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RealtimeDataEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RealtimeDataEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transport<T extends TransportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransportDefaultArgs<ExtArgs>>): Prisma__TransportClient<$Result.GetResult<Prisma.$TransportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dataEntry<T extends DataEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DataEntryDefaultArgs<ExtArgs>>): Prisma__DataEntryClient<$Result.GetResult<Prisma.$DataEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RealtimeDataEntry model
   */
  interface RealtimeDataEntryFieldRefs {
    readonly id: FieldRef<"RealtimeDataEntry", 'String'>
    readonly timestamp: FieldRef<"RealtimeDataEntry", 'DateTime'>
    readonly transportId: FieldRef<"RealtimeDataEntry", 'String'>
    readonly dataEntryId: FieldRef<"RealtimeDataEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RealtimeDataEntry findUnique
   */
  export type RealtimeDataEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtimeDataEntry
     */
    select?: RealtimeDataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtimeDataEntry
     */
    omit?: RealtimeDataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtimeDataEntryInclude<ExtArgs> | null
    /**
     * Filter, which RealtimeDataEntry to fetch.
     */
    where: RealtimeDataEntryWhereUniqueInput
  }

  /**
   * RealtimeDataEntry findUniqueOrThrow
   */
  export type RealtimeDataEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtimeDataEntry
     */
    select?: RealtimeDataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtimeDataEntry
     */
    omit?: RealtimeDataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtimeDataEntryInclude<ExtArgs> | null
    /**
     * Filter, which RealtimeDataEntry to fetch.
     */
    where: RealtimeDataEntryWhereUniqueInput
  }

  /**
   * RealtimeDataEntry findFirst
   */
  export type RealtimeDataEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtimeDataEntry
     */
    select?: RealtimeDataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtimeDataEntry
     */
    omit?: RealtimeDataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtimeDataEntryInclude<ExtArgs> | null
    /**
     * Filter, which RealtimeDataEntry to fetch.
     */
    where?: RealtimeDataEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealtimeDataEntries to fetch.
     */
    orderBy?: RealtimeDataEntryOrderByWithRelationInput | RealtimeDataEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealtimeDataEntries.
     */
    cursor?: RealtimeDataEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealtimeDataEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealtimeDataEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealtimeDataEntries.
     */
    distinct?: RealtimeDataEntryScalarFieldEnum | RealtimeDataEntryScalarFieldEnum[]
  }

  /**
   * RealtimeDataEntry findFirstOrThrow
   */
  export type RealtimeDataEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtimeDataEntry
     */
    select?: RealtimeDataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtimeDataEntry
     */
    omit?: RealtimeDataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtimeDataEntryInclude<ExtArgs> | null
    /**
     * Filter, which RealtimeDataEntry to fetch.
     */
    where?: RealtimeDataEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealtimeDataEntries to fetch.
     */
    orderBy?: RealtimeDataEntryOrderByWithRelationInput | RealtimeDataEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealtimeDataEntries.
     */
    cursor?: RealtimeDataEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealtimeDataEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealtimeDataEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealtimeDataEntries.
     */
    distinct?: RealtimeDataEntryScalarFieldEnum | RealtimeDataEntryScalarFieldEnum[]
  }

  /**
   * RealtimeDataEntry findMany
   */
  export type RealtimeDataEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtimeDataEntry
     */
    select?: RealtimeDataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtimeDataEntry
     */
    omit?: RealtimeDataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtimeDataEntryInclude<ExtArgs> | null
    /**
     * Filter, which RealtimeDataEntries to fetch.
     */
    where?: RealtimeDataEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealtimeDataEntries to fetch.
     */
    orderBy?: RealtimeDataEntryOrderByWithRelationInput | RealtimeDataEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RealtimeDataEntries.
     */
    cursor?: RealtimeDataEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealtimeDataEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealtimeDataEntries.
     */
    skip?: number
    distinct?: RealtimeDataEntryScalarFieldEnum | RealtimeDataEntryScalarFieldEnum[]
  }

  /**
   * RealtimeDataEntry create
   */
  export type RealtimeDataEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtimeDataEntry
     */
    select?: RealtimeDataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtimeDataEntry
     */
    omit?: RealtimeDataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtimeDataEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a RealtimeDataEntry.
     */
    data: XOR<RealtimeDataEntryCreateInput, RealtimeDataEntryUncheckedCreateInput>
  }

  /**
   * RealtimeDataEntry createMany
   */
  export type RealtimeDataEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RealtimeDataEntries.
     */
    data: RealtimeDataEntryCreateManyInput | RealtimeDataEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RealtimeDataEntry createManyAndReturn
   */
  export type RealtimeDataEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtimeDataEntry
     */
    select?: RealtimeDataEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RealtimeDataEntry
     */
    omit?: RealtimeDataEntryOmit<ExtArgs> | null
    /**
     * The data used to create many RealtimeDataEntries.
     */
    data: RealtimeDataEntryCreateManyInput | RealtimeDataEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtimeDataEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RealtimeDataEntry update
   */
  export type RealtimeDataEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtimeDataEntry
     */
    select?: RealtimeDataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtimeDataEntry
     */
    omit?: RealtimeDataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtimeDataEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a RealtimeDataEntry.
     */
    data: XOR<RealtimeDataEntryUpdateInput, RealtimeDataEntryUncheckedUpdateInput>
    /**
     * Choose, which RealtimeDataEntry to update.
     */
    where: RealtimeDataEntryWhereUniqueInput
  }

  /**
   * RealtimeDataEntry updateMany
   */
  export type RealtimeDataEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RealtimeDataEntries.
     */
    data: XOR<RealtimeDataEntryUpdateManyMutationInput, RealtimeDataEntryUncheckedUpdateManyInput>
    /**
     * Filter which RealtimeDataEntries to update
     */
    where?: RealtimeDataEntryWhereInput
    /**
     * Limit how many RealtimeDataEntries to update.
     */
    limit?: number
  }

  /**
   * RealtimeDataEntry updateManyAndReturn
   */
  export type RealtimeDataEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtimeDataEntry
     */
    select?: RealtimeDataEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RealtimeDataEntry
     */
    omit?: RealtimeDataEntryOmit<ExtArgs> | null
    /**
     * The data used to update RealtimeDataEntries.
     */
    data: XOR<RealtimeDataEntryUpdateManyMutationInput, RealtimeDataEntryUncheckedUpdateManyInput>
    /**
     * Filter which RealtimeDataEntries to update
     */
    where?: RealtimeDataEntryWhereInput
    /**
     * Limit how many RealtimeDataEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtimeDataEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RealtimeDataEntry upsert
   */
  export type RealtimeDataEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtimeDataEntry
     */
    select?: RealtimeDataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtimeDataEntry
     */
    omit?: RealtimeDataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtimeDataEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the RealtimeDataEntry to update in case it exists.
     */
    where: RealtimeDataEntryWhereUniqueInput
    /**
     * In case the RealtimeDataEntry found by the `where` argument doesn't exist, create a new RealtimeDataEntry with this data.
     */
    create: XOR<RealtimeDataEntryCreateInput, RealtimeDataEntryUncheckedCreateInput>
    /**
     * In case the RealtimeDataEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RealtimeDataEntryUpdateInput, RealtimeDataEntryUncheckedUpdateInput>
  }

  /**
   * RealtimeDataEntry delete
   */
  export type RealtimeDataEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtimeDataEntry
     */
    select?: RealtimeDataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtimeDataEntry
     */
    omit?: RealtimeDataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtimeDataEntryInclude<ExtArgs> | null
    /**
     * Filter which RealtimeDataEntry to delete.
     */
    where: RealtimeDataEntryWhereUniqueInput
  }

  /**
   * RealtimeDataEntry deleteMany
   */
  export type RealtimeDataEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RealtimeDataEntries to delete
     */
    where?: RealtimeDataEntryWhereInput
    /**
     * Limit how many RealtimeDataEntries to delete.
     */
    limit?: number
  }

  /**
   * RealtimeDataEntry without action
   */
  export type RealtimeDataEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtimeDataEntry
     */
    select?: RealtimeDataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtimeDataEntry
     */
    omit?: RealtimeDataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtimeDataEntryInclude<ExtArgs> | null
  }


  /**
   * Model DataEntry
   */

  export type AggregateDataEntry = {
    _count: DataEntryCountAggregateOutputType | null
    _min: DataEntryMinAggregateOutputType | null
    _max: DataEntryMaxAggregateOutputType | null
  }

  export type DataEntryMinAggregateOutputType = {
    id: string | null
  }

  export type DataEntryMaxAggregateOutputType = {
    id: string | null
  }

  export type DataEntryCountAggregateOutputType = {
    id: number
    payload: number
    _all: number
  }


  export type DataEntryMinAggregateInputType = {
    id?: true
  }

  export type DataEntryMaxAggregateInputType = {
    id?: true
  }

  export type DataEntryCountAggregateInputType = {
    id?: true
    payload?: true
    _all?: true
  }

  export type DataEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataEntry to aggregate.
     */
    where?: DataEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataEntries to fetch.
     */
    orderBy?: DataEntryOrderByWithRelationInput | DataEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataEntries
    **/
    _count?: true | DataEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataEntryMaxAggregateInputType
  }

  export type GetDataEntryAggregateType<T extends DataEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateDataEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataEntry[P]>
      : GetScalarType<T[P], AggregateDataEntry[P]>
  }




  export type DataEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataEntryWhereInput
    orderBy?: DataEntryOrderByWithAggregationInput | DataEntryOrderByWithAggregationInput[]
    by: DataEntryScalarFieldEnum[] | DataEntryScalarFieldEnum
    having?: DataEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataEntryCountAggregateInputType | true
    _min?: DataEntryMinAggregateInputType
    _max?: DataEntryMaxAggregateInputType
  }

  export type DataEntryGroupByOutputType = {
    id: string
    payload: JsonValue
    _count: DataEntryCountAggregateOutputType | null
    _min: DataEntryMinAggregateOutputType | null
    _max: DataEntryMaxAggregateOutputType | null
  }

  type GetDataEntryGroupByPayload<T extends DataEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataEntryGroupByOutputType[P]>
            : GetScalarType<T[P], DataEntryGroupByOutputType[P]>
        }
      >
    >


  export type DataEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payload?: boolean
    RealtimeDataEntry?: boolean | DataEntry$RealtimeDataEntryArgs<ExtArgs>
    _count?: boolean | DataEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataEntry"]>

  export type DataEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payload?: boolean
  }, ExtArgs["result"]["dataEntry"]>

  export type DataEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    payload?: boolean
  }, ExtArgs["result"]["dataEntry"]>

  export type DataEntrySelectScalar = {
    id?: boolean
    payload?: boolean
  }

  export type DataEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "payload", ExtArgs["result"]["dataEntry"]>
  export type DataEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RealtimeDataEntry?: boolean | DataEntry$RealtimeDataEntryArgs<ExtArgs>
    _count?: boolean | DataEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DataEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DataEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DataEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataEntry"
    objects: {
      RealtimeDataEntry: Prisma.$RealtimeDataEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      payload: Prisma.JsonValue
    }, ExtArgs["result"]["dataEntry"]>
    composites: {}
  }

  type DataEntryGetPayload<S extends boolean | null | undefined | DataEntryDefaultArgs> = $Result.GetResult<Prisma.$DataEntryPayload, S>

  type DataEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataEntryCountAggregateInputType | true
    }

  export interface DataEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataEntry'], meta: { name: 'DataEntry' } }
    /**
     * Find zero or one DataEntry that matches the filter.
     * @param {DataEntryFindUniqueArgs} args - Arguments to find a DataEntry
     * @example
     * // Get one DataEntry
     * const dataEntry = await prisma.dataEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataEntryFindUniqueArgs>(args: SelectSubset<T, DataEntryFindUniqueArgs<ExtArgs>>): Prisma__DataEntryClient<$Result.GetResult<Prisma.$DataEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataEntryFindUniqueOrThrowArgs} args - Arguments to find a DataEntry
     * @example
     * // Get one DataEntry
     * const dataEntry = await prisma.dataEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, DataEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataEntryClient<$Result.GetResult<Prisma.$DataEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataEntryFindFirstArgs} args - Arguments to find a DataEntry
     * @example
     * // Get one DataEntry
     * const dataEntry = await prisma.dataEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataEntryFindFirstArgs>(args?: SelectSubset<T, DataEntryFindFirstArgs<ExtArgs>>): Prisma__DataEntryClient<$Result.GetResult<Prisma.$DataEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataEntryFindFirstOrThrowArgs} args - Arguments to find a DataEntry
     * @example
     * // Get one DataEntry
     * const dataEntry = await prisma.dataEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, DataEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataEntryClient<$Result.GetResult<Prisma.$DataEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataEntries
     * const dataEntries = await prisma.dataEntry.findMany()
     * 
     * // Get first 10 DataEntries
     * const dataEntries = await prisma.dataEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataEntryWithIdOnly = await prisma.dataEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataEntryFindManyArgs>(args?: SelectSubset<T, DataEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataEntry.
     * @param {DataEntryCreateArgs} args - Arguments to create a DataEntry.
     * @example
     * // Create one DataEntry
     * const DataEntry = await prisma.dataEntry.create({
     *   data: {
     *     // ... data to create a DataEntry
     *   }
     * })
     * 
     */
    create<T extends DataEntryCreateArgs>(args: SelectSubset<T, DataEntryCreateArgs<ExtArgs>>): Prisma__DataEntryClient<$Result.GetResult<Prisma.$DataEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataEntries.
     * @param {DataEntryCreateManyArgs} args - Arguments to create many DataEntries.
     * @example
     * // Create many DataEntries
     * const dataEntry = await prisma.dataEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataEntryCreateManyArgs>(args?: SelectSubset<T, DataEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataEntries and returns the data saved in the database.
     * @param {DataEntryCreateManyAndReturnArgs} args - Arguments to create many DataEntries.
     * @example
     * // Create many DataEntries
     * const dataEntry = await prisma.dataEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataEntries and only return the `id`
     * const dataEntryWithIdOnly = await prisma.dataEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DataEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, DataEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DataEntry.
     * @param {DataEntryDeleteArgs} args - Arguments to delete one DataEntry.
     * @example
     * // Delete one DataEntry
     * const DataEntry = await prisma.dataEntry.delete({
     *   where: {
     *     // ... filter to delete one DataEntry
     *   }
     * })
     * 
     */
    delete<T extends DataEntryDeleteArgs>(args: SelectSubset<T, DataEntryDeleteArgs<ExtArgs>>): Prisma__DataEntryClient<$Result.GetResult<Prisma.$DataEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataEntry.
     * @param {DataEntryUpdateArgs} args - Arguments to update one DataEntry.
     * @example
     * // Update one DataEntry
     * const dataEntry = await prisma.dataEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataEntryUpdateArgs>(args: SelectSubset<T, DataEntryUpdateArgs<ExtArgs>>): Prisma__DataEntryClient<$Result.GetResult<Prisma.$DataEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataEntries.
     * @param {DataEntryDeleteManyArgs} args - Arguments to filter DataEntries to delete.
     * @example
     * // Delete a few DataEntries
     * const { count } = await prisma.dataEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataEntryDeleteManyArgs>(args?: SelectSubset<T, DataEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataEntries
     * const dataEntry = await prisma.dataEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataEntryUpdateManyArgs>(args: SelectSubset<T, DataEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataEntries and returns the data updated in the database.
     * @param {DataEntryUpdateManyAndReturnArgs} args - Arguments to update many DataEntries.
     * @example
     * // Update many DataEntries
     * const dataEntry = await prisma.dataEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DataEntries and only return the `id`
     * const dataEntryWithIdOnly = await prisma.dataEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DataEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, DataEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DataEntry.
     * @param {DataEntryUpsertArgs} args - Arguments to update or create a DataEntry.
     * @example
     * // Update or create a DataEntry
     * const dataEntry = await prisma.dataEntry.upsert({
     *   create: {
     *     // ... data to create a DataEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataEntry we want to update
     *   }
     * })
     */
    upsert<T extends DataEntryUpsertArgs>(args: SelectSubset<T, DataEntryUpsertArgs<ExtArgs>>): Prisma__DataEntryClient<$Result.GetResult<Prisma.$DataEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataEntryCountArgs} args - Arguments to filter DataEntries to count.
     * @example
     * // Count the number of DataEntries
     * const count = await prisma.dataEntry.count({
     *   where: {
     *     // ... the filter for the DataEntries we want to count
     *   }
     * })
    **/
    count<T extends DataEntryCountArgs>(
      args?: Subset<T, DataEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataEntryAggregateArgs>(args: Subset<T, DataEntryAggregateArgs>): Prisma.PrismaPromise<GetDataEntryAggregateType<T>>

    /**
     * Group by DataEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataEntryGroupByArgs['orderBy'] }
        : { orderBy?: DataEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataEntry model
   */
  readonly fields: DataEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    RealtimeDataEntry<T extends DataEntry$RealtimeDataEntryArgs<ExtArgs> = {}>(args?: Subset<T, DataEntry$RealtimeDataEntryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RealtimeDataEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DataEntry model
   */
  interface DataEntryFieldRefs {
    readonly id: FieldRef<"DataEntry", 'String'>
    readonly payload: FieldRef<"DataEntry", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * DataEntry findUnique
   */
  export type DataEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntry
     */
    select?: DataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntry
     */
    omit?: DataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryInclude<ExtArgs> | null
    /**
     * Filter, which DataEntry to fetch.
     */
    where: DataEntryWhereUniqueInput
  }

  /**
   * DataEntry findUniqueOrThrow
   */
  export type DataEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntry
     */
    select?: DataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntry
     */
    omit?: DataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryInclude<ExtArgs> | null
    /**
     * Filter, which DataEntry to fetch.
     */
    where: DataEntryWhereUniqueInput
  }

  /**
   * DataEntry findFirst
   */
  export type DataEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntry
     */
    select?: DataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntry
     */
    omit?: DataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryInclude<ExtArgs> | null
    /**
     * Filter, which DataEntry to fetch.
     */
    where?: DataEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataEntries to fetch.
     */
    orderBy?: DataEntryOrderByWithRelationInput | DataEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataEntries.
     */
    cursor?: DataEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataEntries.
     */
    distinct?: DataEntryScalarFieldEnum | DataEntryScalarFieldEnum[]
  }

  /**
   * DataEntry findFirstOrThrow
   */
  export type DataEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntry
     */
    select?: DataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntry
     */
    omit?: DataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryInclude<ExtArgs> | null
    /**
     * Filter, which DataEntry to fetch.
     */
    where?: DataEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataEntries to fetch.
     */
    orderBy?: DataEntryOrderByWithRelationInput | DataEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataEntries.
     */
    cursor?: DataEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataEntries.
     */
    distinct?: DataEntryScalarFieldEnum | DataEntryScalarFieldEnum[]
  }

  /**
   * DataEntry findMany
   */
  export type DataEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntry
     */
    select?: DataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntry
     */
    omit?: DataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryInclude<ExtArgs> | null
    /**
     * Filter, which DataEntries to fetch.
     */
    where?: DataEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataEntries to fetch.
     */
    orderBy?: DataEntryOrderByWithRelationInput | DataEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataEntries.
     */
    cursor?: DataEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataEntries.
     */
    skip?: number
    distinct?: DataEntryScalarFieldEnum | DataEntryScalarFieldEnum[]
  }

  /**
   * DataEntry create
   */
  export type DataEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntry
     */
    select?: DataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntry
     */
    omit?: DataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a DataEntry.
     */
    data: XOR<DataEntryCreateInput, DataEntryUncheckedCreateInput>
  }

  /**
   * DataEntry createMany
   */
  export type DataEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataEntries.
     */
    data: DataEntryCreateManyInput | DataEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataEntry createManyAndReturn
   */
  export type DataEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntry
     */
    select?: DataEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntry
     */
    omit?: DataEntryOmit<ExtArgs> | null
    /**
     * The data used to create many DataEntries.
     */
    data: DataEntryCreateManyInput | DataEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DataEntry update
   */
  export type DataEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntry
     */
    select?: DataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntry
     */
    omit?: DataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a DataEntry.
     */
    data: XOR<DataEntryUpdateInput, DataEntryUncheckedUpdateInput>
    /**
     * Choose, which DataEntry to update.
     */
    where: DataEntryWhereUniqueInput
  }

  /**
   * DataEntry updateMany
   */
  export type DataEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataEntries.
     */
    data: XOR<DataEntryUpdateManyMutationInput, DataEntryUncheckedUpdateManyInput>
    /**
     * Filter which DataEntries to update
     */
    where?: DataEntryWhereInput
    /**
     * Limit how many DataEntries to update.
     */
    limit?: number
  }

  /**
   * DataEntry updateManyAndReturn
   */
  export type DataEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntry
     */
    select?: DataEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntry
     */
    omit?: DataEntryOmit<ExtArgs> | null
    /**
     * The data used to update DataEntries.
     */
    data: XOR<DataEntryUpdateManyMutationInput, DataEntryUncheckedUpdateManyInput>
    /**
     * Filter which DataEntries to update
     */
    where?: DataEntryWhereInput
    /**
     * Limit how many DataEntries to update.
     */
    limit?: number
  }

  /**
   * DataEntry upsert
   */
  export type DataEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntry
     */
    select?: DataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntry
     */
    omit?: DataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the DataEntry to update in case it exists.
     */
    where: DataEntryWhereUniqueInput
    /**
     * In case the DataEntry found by the `where` argument doesn't exist, create a new DataEntry with this data.
     */
    create: XOR<DataEntryCreateInput, DataEntryUncheckedCreateInput>
    /**
     * In case the DataEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataEntryUpdateInput, DataEntryUncheckedUpdateInput>
  }

  /**
   * DataEntry delete
   */
  export type DataEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntry
     */
    select?: DataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntry
     */
    omit?: DataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryInclude<ExtArgs> | null
    /**
     * Filter which DataEntry to delete.
     */
    where: DataEntryWhereUniqueInput
  }

  /**
   * DataEntry deleteMany
   */
  export type DataEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataEntries to delete
     */
    where?: DataEntryWhereInput
    /**
     * Limit how many DataEntries to delete.
     */
    limit?: number
  }

  /**
   * DataEntry.RealtimeDataEntry
   */
  export type DataEntry$RealtimeDataEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RealtimeDataEntry
     */
    select?: RealtimeDataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RealtimeDataEntry
     */
    omit?: RealtimeDataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RealtimeDataEntryInclude<ExtArgs> | null
    where?: RealtimeDataEntryWhereInput
    orderBy?: RealtimeDataEntryOrderByWithRelationInput | RealtimeDataEntryOrderByWithRelationInput[]
    cursor?: RealtimeDataEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RealtimeDataEntryScalarFieldEnum | RealtimeDataEntryScalarFieldEnum[]
  }

  /**
   * DataEntry without action
   */
  export type DataEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataEntry
     */
    select?: DataEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataEntry
     */
    omit?: DataEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataEntryInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | User$messagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Forum
   */

  export type AggregateForum = {
    _count: ForumCountAggregateOutputType | null
    _min: ForumMinAggregateOutputType | null
    _max: ForumMaxAggregateOutputType | null
  }

  export type ForumMinAggregateOutputType = {
    id: string | null
    title: string | null
    type: string | null
  }

  export type ForumMaxAggregateOutputType = {
    id: string | null
    title: string | null
    type: string | null
  }

  export type ForumCountAggregateOutputType = {
    id: number
    title: number
    type: number
    _all: number
  }


  export type ForumMinAggregateInputType = {
    id?: true
    title?: true
    type?: true
  }

  export type ForumMaxAggregateInputType = {
    id?: true
    title?: true
    type?: true
  }

  export type ForumCountAggregateInputType = {
    id?: true
    title?: true
    type?: true
    _all?: true
  }

  export type ForumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forum to aggregate.
     */
    where?: ForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forums to fetch.
     */
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forums
    **/
    _count?: true | ForumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ForumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ForumMaxAggregateInputType
  }

  export type GetForumAggregateType<T extends ForumAggregateArgs> = {
        [P in keyof T & keyof AggregateForum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForum[P]>
      : GetScalarType<T[P], AggregateForum[P]>
  }




  export type ForumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ForumWhereInput
    orderBy?: ForumOrderByWithAggregationInput | ForumOrderByWithAggregationInput[]
    by: ForumScalarFieldEnum[] | ForumScalarFieldEnum
    having?: ForumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ForumCountAggregateInputType | true
    _min?: ForumMinAggregateInputType
    _max?: ForumMaxAggregateInputType
  }

  export type ForumGroupByOutputType = {
    id: string
    title: string
    type: string
    _count: ForumCountAggregateOutputType | null
    _min: ForumMinAggregateOutputType | null
    _max: ForumMaxAggregateOutputType | null
  }

  type GetForumGroupByPayload<T extends ForumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ForumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ForumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ForumGroupByOutputType[P]>
            : GetScalarType<T[P], ForumGroupByOutputType[P]>
        }
      >
    >


  export type ForumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    messages?: boolean | Forum$messagesArgs<ExtArgs>
    _count?: boolean | ForumCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forum"]>

  export type ForumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
  }, ExtArgs["result"]["forum"]>

  export type ForumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
  }, ExtArgs["result"]["forum"]>

  export type ForumSelectScalar = {
    id?: boolean
    title?: boolean
    type?: boolean
  }

  export type ForumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type", ExtArgs["result"]["forum"]>
  export type ForumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Forum$messagesArgs<ExtArgs>
    _count?: boolean | ForumCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ForumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ForumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ForumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Forum"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      type: string
    }, ExtArgs["result"]["forum"]>
    composites: {}
  }

  type ForumGetPayload<S extends boolean | null | undefined | ForumDefaultArgs> = $Result.GetResult<Prisma.$ForumPayload, S>

  type ForumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ForumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ForumCountAggregateInputType | true
    }

  export interface ForumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Forum'], meta: { name: 'Forum' } }
    /**
     * Find zero or one Forum that matches the filter.
     * @param {ForumFindUniqueArgs} args - Arguments to find a Forum
     * @example
     * // Get one Forum
     * const forum = await prisma.forum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ForumFindUniqueArgs>(args: SelectSubset<T, ForumFindUniqueArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Forum that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ForumFindUniqueOrThrowArgs} args - Arguments to find a Forum
     * @example
     * // Get one Forum
     * const forum = await prisma.forum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ForumFindUniqueOrThrowArgs>(args: SelectSubset<T, ForumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Forum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumFindFirstArgs} args - Arguments to find a Forum
     * @example
     * // Get one Forum
     * const forum = await prisma.forum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ForumFindFirstArgs>(args?: SelectSubset<T, ForumFindFirstArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Forum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumFindFirstOrThrowArgs} args - Arguments to find a Forum
     * @example
     * // Get one Forum
     * const forum = await prisma.forum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ForumFindFirstOrThrowArgs>(args?: SelectSubset<T, ForumFindFirstOrThrowArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forums
     * const forums = await prisma.forum.findMany()
     * 
     * // Get first 10 Forums
     * const forums = await prisma.forum.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const forumWithIdOnly = await prisma.forum.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ForumFindManyArgs>(args?: SelectSubset<T, ForumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Forum.
     * @param {ForumCreateArgs} args - Arguments to create a Forum.
     * @example
     * // Create one Forum
     * const Forum = await prisma.forum.create({
     *   data: {
     *     // ... data to create a Forum
     *   }
     * })
     * 
     */
    create<T extends ForumCreateArgs>(args: SelectSubset<T, ForumCreateArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Forums.
     * @param {ForumCreateManyArgs} args - Arguments to create many Forums.
     * @example
     * // Create many Forums
     * const forum = await prisma.forum.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ForumCreateManyArgs>(args?: SelectSubset<T, ForumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Forums and returns the data saved in the database.
     * @param {ForumCreateManyAndReturnArgs} args - Arguments to create many Forums.
     * @example
     * // Create many Forums
     * const forum = await prisma.forum.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Forums and only return the `id`
     * const forumWithIdOnly = await prisma.forum.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ForumCreateManyAndReturnArgs>(args?: SelectSubset<T, ForumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Forum.
     * @param {ForumDeleteArgs} args - Arguments to delete one Forum.
     * @example
     * // Delete one Forum
     * const Forum = await prisma.forum.delete({
     *   where: {
     *     // ... filter to delete one Forum
     *   }
     * })
     * 
     */
    delete<T extends ForumDeleteArgs>(args: SelectSubset<T, ForumDeleteArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Forum.
     * @param {ForumUpdateArgs} args - Arguments to update one Forum.
     * @example
     * // Update one Forum
     * const forum = await prisma.forum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ForumUpdateArgs>(args: SelectSubset<T, ForumUpdateArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Forums.
     * @param {ForumDeleteManyArgs} args - Arguments to filter Forums to delete.
     * @example
     * // Delete a few Forums
     * const { count } = await prisma.forum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ForumDeleteManyArgs>(args?: SelectSubset<T, ForumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forums
     * const forum = await prisma.forum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ForumUpdateManyArgs>(args: SelectSubset<T, ForumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forums and returns the data updated in the database.
     * @param {ForumUpdateManyAndReturnArgs} args - Arguments to update many Forums.
     * @example
     * // Update many Forums
     * const forum = await prisma.forum.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Forums and only return the `id`
     * const forumWithIdOnly = await prisma.forum.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ForumUpdateManyAndReturnArgs>(args: SelectSubset<T, ForumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Forum.
     * @param {ForumUpsertArgs} args - Arguments to update or create a Forum.
     * @example
     * // Update or create a Forum
     * const forum = await prisma.forum.upsert({
     *   create: {
     *     // ... data to create a Forum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Forum we want to update
     *   }
     * })
     */
    upsert<T extends ForumUpsertArgs>(args: SelectSubset<T, ForumUpsertArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Forums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumCountArgs} args - Arguments to filter Forums to count.
     * @example
     * // Count the number of Forums
     * const count = await prisma.forum.count({
     *   where: {
     *     // ... the filter for the Forums we want to count
     *   }
     * })
    **/
    count<T extends ForumCountArgs>(
      args?: Subset<T, ForumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ForumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Forum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ForumAggregateArgs>(args: Subset<T, ForumAggregateArgs>): Prisma.PrismaPromise<GetForumAggregateType<T>>

    /**
     * Group by Forum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ForumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ForumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ForumGroupByArgs['orderBy'] }
        : { orderBy?: ForumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ForumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetForumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Forum model
   */
  readonly fields: ForumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Forum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ForumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Forum$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Forum$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Forum model
   */
  interface ForumFieldRefs {
    readonly id: FieldRef<"Forum", 'String'>
    readonly title: FieldRef<"Forum", 'String'>
    readonly type: FieldRef<"Forum", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Forum findUnique
   */
  export type ForumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forum to fetch.
     */
    where: ForumWhereUniqueInput
  }

  /**
   * Forum findUniqueOrThrow
   */
  export type ForumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forum to fetch.
     */
    where: ForumWhereUniqueInput
  }

  /**
   * Forum findFirst
   */
  export type ForumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forum to fetch.
     */
    where?: ForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forums to fetch.
     */
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forums.
     */
    cursor?: ForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forums.
     */
    distinct?: ForumScalarFieldEnum | ForumScalarFieldEnum[]
  }

  /**
   * Forum findFirstOrThrow
   */
  export type ForumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forum to fetch.
     */
    where?: ForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forums to fetch.
     */
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forums.
     */
    cursor?: ForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forums.
     */
    distinct?: ForumScalarFieldEnum | ForumScalarFieldEnum[]
  }

  /**
   * Forum findMany
   */
  export type ForumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter, which Forums to fetch.
     */
    where?: ForumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forums to fetch.
     */
    orderBy?: ForumOrderByWithRelationInput | ForumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forums.
     */
    cursor?: ForumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forums.
     */
    skip?: number
    distinct?: ForumScalarFieldEnum | ForumScalarFieldEnum[]
  }

  /**
   * Forum create
   */
  export type ForumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * The data needed to create a Forum.
     */
    data: XOR<ForumCreateInput, ForumUncheckedCreateInput>
  }

  /**
   * Forum createMany
   */
  export type ForumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forums.
     */
    data: ForumCreateManyInput | ForumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Forum createManyAndReturn
   */
  export type ForumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * The data used to create many Forums.
     */
    data: ForumCreateManyInput | ForumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Forum update
   */
  export type ForumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * The data needed to update a Forum.
     */
    data: XOR<ForumUpdateInput, ForumUncheckedUpdateInput>
    /**
     * Choose, which Forum to update.
     */
    where: ForumWhereUniqueInput
  }

  /**
   * Forum updateMany
   */
  export type ForumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forums.
     */
    data: XOR<ForumUpdateManyMutationInput, ForumUncheckedUpdateManyInput>
    /**
     * Filter which Forums to update
     */
    where?: ForumWhereInput
    /**
     * Limit how many Forums to update.
     */
    limit?: number
  }

  /**
   * Forum updateManyAndReturn
   */
  export type ForumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * The data used to update Forums.
     */
    data: XOR<ForumUpdateManyMutationInput, ForumUncheckedUpdateManyInput>
    /**
     * Filter which Forums to update
     */
    where?: ForumWhereInput
    /**
     * Limit how many Forums to update.
     */
    limit?: number
  }

  /**
   * Forum upsert
   */
  export type ForumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * The filter to search for the Forum to update in case it exists.
     */
    where: ForumWhereUniqueInput
    /**
     * In case the Forum found by the `where` argument doesn't exist, create a new Forum with this data.
     */
    create: XOR<ForumCreateInput, ForumUncheckedCreateInput>
    /**
     * In case the Forum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ForumUpdateInput, ForumUncheckedUpdateInput>
  }

  /**
   * Forum delete
   */
  export type ForumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
    /**
     * Filter which Forum to delete.
     */
    where: ForumWhereUniqueInput
  }

  /**
   * Forum deleteMany
   */
  export type ForumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forums to delete
     */
    where?: ForumWhereInput
    /**
     * Limit how many Forums to delete.
     */
    limit?: number
  }

  /**
   * Forum.messages
   */
  export type Forum$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Forum without action
   */
  export type ForumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forum
     */
    select?: ForumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forum
     */
    omit?: ForumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ForumInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    userId: string | null
    forumId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    createdAt: Date | null
    userId: string | null
    forumId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    createdAt: number
    userId: number
    forumId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    userId?: true
    forumId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    userId?: true
    forumId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    createdAt?: true
    userId?: true
    forumId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    createdAt: Date
    userId: string
    forumId: string
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    forumId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    forum?: boolean | ForumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    forumId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    forum?: boolean | ForumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    forumId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    forum?: boolean | ForumDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    createdAt?: boolean
    userId?: boolean
    forumId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "createdAt" | "userId" | "forumId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    forum?: boolean | ForumDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    forum?: boolean | ForumDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    forum?: boolean | ForumDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      forum: Prisma.$ForumPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      createdAt: Date
      userId: string
      forumId: string
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    forum<T extends ForumDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ForumDefaultArgs<ExtArgs>>): Prisma__ForumClient<$Result.GetResult<Prisma.$ForumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly userId: FieldRef<"Message", 'String'>
    readonly forumId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TransportScalarFieldEnum: {
    id: 'id',
    type: 'type',
    line: 'line'
  };

  export type TransportScalarFieldEnum = (typeof TransportScalarFieldEnum)[keyof typeof TransportScalarFieldEnum]


  export const TransportEventScalarFieldEnum: {
    id: 'id',
    transportId: 'transportId',
    timestamp: 'timestamp',
    payload: 'payload'
  };

  export type TransportEventScalarFieldEnum = (typeof TransportEventScalarFieldEnum)[keyof typeof TransportEventScalarFieldEnum]


  export const RealtimeDataEntryScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    transportId: 'transportId',
    dataEntryId: 'dataEntryId'
  };

  export type RealtimeDataEntryScalarFieldEnum = (typeof RealtimeDataEntryScalarFieldEnum)[keyof typeof RealtimeDataEntryScalarFieldEnum]


  export const DataEntryScalarFieldEnum: {
    id: 'id',
    payload: 'payload'
  };

  export type DataEntryScalarFieldEnum = (typeof DataEntryScalarFieldEnum)[keyof typeof DataEntryScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ForumScalarFieldEnum: {
    id: 'id',
    title: 'title',
    type: 'type'
  };

  export type ForumScalarFieldEnum = (typeof ForumScalarFieldEnum)[keyof typeof ForumScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    createdAt: 'createdAt',
    userId: 'userId',
    forumId: 'forumId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type TransportWhereInput = {
    AND?: TransportWhereInput | TransportWhereInput[]
    OR?: TransportWhereInput[]
    NOT?: TransportWhereInput | TransportWhereInput[]
    id?: StringFilter<"Transport"> | string
    type?: StringFilter<"Transport"> | string
    line?: StringFilter<"Transport"> | string
    events?: TransportEventListRelationFilter
    realtimeData?: RealtimeDataEntryListRelationFilter
  }

  export type TransportOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    line?: SortOrder
    events?: TransportEventOrderByRelationAggregateInput
    realtimeData?: RealtimeDataEntryOrderByRelationAggregateInput
  }

  export type TransportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransportWhereInput | TransportWhereInput[]
    OR?: TransportWhereInput[]
    NOT?: TransportWhereInput | TransportWhereInput[]
    type?: StringFilter<"Transport"> | string
    line?: StringFilter<"Transport"> | string
    events?: TransportEventListRelationFilter
    realtimeData?: RealtimeDataEntryListRelationFilter
  }, "id">

  export type TransportOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    line?: SortOrder
    _count?: TransportCountOrderByAggregateInput
    _max?: TransportMaxOrderByAggregateInput
    _min?: TransportMinOrderByAggregateInput
  }

  export type TransportScalarWhereWithAggregatesInput = {
    AND?: TransportScalarWhereWithAggregatesInput | TransportScalarWhereWithAggregatesInput[]
    OR?: TransportScalarWhereWithAggregatesInput[]
    NOT?: TransportScalarWhereWithAggregatesInput | TransportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transport"> | string
    type?: StringWithAggregatesFilter<"Transport"> | string
    line?: StringWithAggregatesFilter<"Transport"> | string
  }

  export type TransportEventWhereInput = {
    AND?: TransportEventWhereInput | TransportEventWhereInput[]
    OR?: TransportEventWhereInput[]
    NOT?: TransportEventWhereInput | TransportEventWhereInput[]
    id?: StringFilter<"TransportEvent"> | string
    transportId?: StringFilter<"TransportEvent"> | string
    timestamp?: DateTimeFilter<"TransportEvent"> | Date | string
    payload?: JsonFilter<"TransportEvent">
    transport?: XOR<TransportScalarRelationFilter, TransportWhereInput>
  }

  export type TransportEventOrderByWithRelationInput = {
    id?: SortOrder
    transportId?: SortOrder
    timestamp?: SortOrder
    payload?: SortOrder
    transport?: TransportOrderByWithRelationInput
  }

  export type TransportEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransportEventWhereInput | TransportEventWhereInput[]
    OR?: TransportEventWhereInput[]
    NOT?: TransportEventWhereInput | TransportEventWhereInput[]
    transportId?: StringFilter<"TransportEvent"> | string
    timestamp?: DateTimeFilter<"TransportEvent"> | Date | string
    payload?: JsonFilter<"TransportEvent">
    transport?: XOR<TransportScalarRelationFilter, TransportWhereInput>
  }, "id">

  export type TransportEventOrderByWithAggregationInput = {
    id?: SortOrder
    transportId?: SortOrder
    timestamp?: SortOrder
    payload?: SortOrder
    _count?: TransportEventCountOrderByAggregateInput
    _max?: TransportEventMaxOrderByAggregateInput
    _min?: TransportEventMinOrderByAggregateInput
  }

  export type TransportEventScalarWhereWithAggregatesInput = {
    AND?: TransportEventScalarWhereWithAggregatesInput | TransportEventScalarWhereWithAggregatesInput[]
    OR?: TransportEventScalarWhereWithAggregatesInput[]
    NOT?: TransportEventScalarWhereWithAggregatesInput | TransportEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransportEvent"> | string
    transportId?: StringWithAggregatesFilter<"TransportEvent"> | string
    timestamp?: DateTimeWithAggregatesFilter<"TransportEvent"> | Date | string
    payload?: JsonWithAggregatesFilter<"TransportEvent">
  }

  export type RealtimeDataEntryWhereInput = {
    AND?: RealtimeDataEntryWhereInput | RealtimeDataEntryWhereInput[]
    OR?: RealtimeDataEntryWhereInput[]
    NOT?: RealtimeDataEntryWhereInput | RealtimeDataEntryWhereInput[]
    id?: StringFilter<"RealtimeDataEntry"> | string
    timestamp?: DateTimeFilter<"RealtimeDataEntry"> | Date | string
    transportId?: StringFilter<"RealtimeDataEntry"> | string
    dataEntryId?: StringFilter<"RealtimeDataEntry"> | string
    transport?: XOR<TransportScalarRelationFilter, TransportWhereInput>
    dataEntry?: XOR<DataEntryScalarRelationFilter, DataEntryWhereInput>
  }

  export type RealtimeDataEntryOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    transportId?: SortOrder
    dataEntryId?: SortOrder
    transport?: TransportOrderByWithRelationInput
    dataEntry?: DataEntryOrderByWithRelationInput
  }

  export type RealtimeDataEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    dataEntryId?: string
    AND?: RealtimeDataEntryWhereInput | RealtimeDataEntryWhereInput[]
    OR?: RealtimeDataEntryWhereInput[]
    NOT?: RealtimeDataEntryWhereInput | RealtimeDataEntryWhereInput[]
    timestamp?: DateTimeFilter<"RealtimeDataEntry"> | Date | string
    transportId?: StringFilter<"RealtimeDataEntry"> | string
    transport?: XOR<TransportScalarRelationFilter, TransportWhereInput>
    dataEntry?: XOR<DataEntryScalarRelationFilter, DataEntryWhereInput>
  }, "id" | "dataEntryId">

  export type RealtimeDataEntryOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    transportId?: SortOrder
    dataEntryId?: SortOrder
    _count?: RealtimeDataEntryCountOrderByAggregateInput
    _max?: RealtimeDataEntryMaxOrderByAggregateInput
    _min?: RealtimeDataEntryMinOrderByAggregateInput
  }

  export type RealtimeDataEntryScalarWhereWithAggregatesInput = {
    AND?: RealtimeDataEntryScalarWhereWithAggregatesInput | RealtimeDataEntryScalarWhereWithAggregatesInput[]
    OR?: RealtimeDataEntryScalarWhereWithAggregatesInput[]
    NOT?: RealtimeDataEntryScalarWhereWithAggregatesInput | RealtimeDataEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RealtimeDataEntry"> | string
    timestamp?: DateTimeWithAggregatesFilter<"RealtimeDataEntry"> | Date | string
    transportId?: StringWithAggregatesFilter<"RealtimeDataEntry"> | string
    dataEntryId?: StringWithAggregatesFilter<"RealtimeDataEntry"> | string
  }

  export type DataEntryWhereInput = {
    AND?: DataEntryWhereInput | DataEntryWhereInput[]
    OR?: DataEntryWhereInput[]
    NOT?: DataEntryWhereInput | DataEntryWhereInput[]
    id?: StringFilter<"DataEntry"> | string
    payload?: JsonFilter<"DataEntry">
    RealtimeDataEntry?: RealtimeDataEntryListRelationFilter
  }

  export type DataEntryOrderByWithRelationInput = {
    id?: SortOrder
    payload?: SortOrder
    RealtimeDataEntry?: RealtimeDataEntryOrderByRelationAggregateInput
  }

  export type DataEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DataEntryWhereInput | DataEntryWhereInput[]
    OR?: DataEntryWhereInput[]
    NOT?: DataEntryWhereInput | DataEntryWhereInput[]
    payload?: JsonFilter<"DataEntry">
    RealtimeDataEntry?: RealtimeDataEntryListRelationFilter
  }, "id">

  export type DataEntryOrderByWithAggregationInput = {
    id?: SortOrder
    payload?: SortOrder
    _count?: DataEntryCountOrderByAggregateInput
    _max?: DataEntryMaxOrderByAggregateInput
    _min?: DataEntryMinOrderByAggregateInput
  }

  export type DataEntryScalarWhereWithAggregatesInput = {
    AND?: DataEntryScalarWhereWithAggregatesInput | DataEntryScalarWhereWithAggregatesInput[]
    OR?: DataEntryScalarWhereWithAggregatesInput[]
    NOT?: DataEntryScalarWhereWithAggregatesInput | DataEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DataEntry"> | string
    payload?: JsonWithAggregatesFilter<"DataEntry">
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    messages?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    messages?: MessageListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type ForumWhereInput = {
    AND?: ForumWhereInput | ForumWhereInput[]
    OR?: ForumWhereInput[]
    NOT?: ForumWhereInput | ForumWhereInput[]
    id?: StringFilter<"Forum"> | string
    title?: StringFilter<"Forum"> | string
    type?: StringFilter<"Forum"> | string
    messages?: MessageListRelationFilter
  }

  export type ForumOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
  }

  export type ForumWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ForumWhereInput | ForumWhereInput[]
    OR?: ForumWhereInput[]
    NOT?: ForumWhereInput | ForumWhereInput[]
    title?: StringFilter<"Forum"> | string
    type?: StringFilter<"Forum"> | string
    messages?: MessageListRelationFilter
  }, "id">

  export type ForumOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    _count?: ForumCountOrderByAggregateInput
    _max?: ForumMaxOrderByAggregateInput
    _min?: ForumMinOrderByAggregateInput
  }

  export type ForumScalarWhereWithAggregatesInput = {
    AND?: ForumScalarWhereWithAggregatesInput | ForumScalarWhereWithAggregatesInput[]
    OR?: ForumScalarWhereWithAggregatesInput[]
    NOT?: ForumScalarWhereWithAggregatesInput | ForumScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Forum"> | string
    title?: StringWithAggregatesFilter<"Forum"> | string
    type?: StringWithAggregatesFilter<"Forum"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    userId?: StringFilter<"Message"> | string
    forumId?: StringFilter<"Message"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    forum?: XOR<ForumScalarRelationFilter, ForumWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    forumId?: SortOrder
    user?: UserOrderByWithRelationInput
    forum?: ForumOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    userId?: StringFilter<"Message"> | string
    forumId?: StringFilter<"Message"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    forum?: XOR<ForumScalarRelationFilter, ForumWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    forumId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    userId?: StringWithAggregatesFilter<"Message"> | string
    forumId?: StringWithAggregatesFilter<"Message"> | string
  }

  export type TransportCreateInput = {
    id?: string
    type: string
    line: string
    events?: TransportEventCreateNestedManyWithoutTransportInput
    realtimeData?: RealtimeDataEntryCreateNestedManyWithoutTransportInput
  }

  export type TransportUncheckedCreateInput = {
    id?: string
    type: string
    line: string
    events?: TransportEventUncheckedCreateNestedManyWithoutTransportInput
    realtimeData?: RealtimeDataEntryUncheckedCreateNestedManyWithoutTransportInput
  }

  export type TransportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    events?: TransportEventUpdateManyWithoutTransportNestedInput
    realtimeData?: RealtimeDataEntryUpdateManyWithoutTransportNestedInput
  }

  export type TransportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    events?: TransportEventUncheckedUpdateManyWithoutTransportNestedInput
    realtimeData?: RealtimeDataEntryUncheckedUpdateManyWithoutTransportNestedInput
  }

  export type TransportCreateManyInput = {
    id?: string
    type: string
    line: string
  }

  export type TransportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
  }

  export type TransportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
  }

  export type TransportEventCreateInput = {
    id?: string
    timestamp: Date | string
    payload: JsonNullValueInput | InputJsonValue
    transport: TransportCreateNestedOneWithoutEventsInput
  }

  export type TransportEventUncheckedCreateInput = {
    id?: string
    transportId: string
    timestamp: Date | string
    payload: JsonNullValueInput | InputJsonValue
  }

  export type TransportEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: JsonNullValueInput | InputJsonValue
    transport?: TransportUpdateOneRequiredWithoutEventsNestedInput
  }

  export type TransportEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transportId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: JsonNullValueInput | InputJsonValue
  }

  export type TransportEventCreateManyInput = {
    id?: string
    transportId: string
    timestamp: Date | string
    payload: JsonNullValueInput | InputJsonValue
  }

  export type TransportEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: JsonNullValueInput | InputJsonValue
  }

  export type TransportEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    transportId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: JsonNullValueInput | InputJsonValue
  }

  export type RealtimeDataEntryCreateInput = {
    id?: string
    timestamp?: Date | string
    transport: TransportCreateNestedOneWithoutRealtimeDataInput
    dataEntry: DataEntryCreateNestedOneWithoutRealtimeDataEntryInput
  }

  export type RealtimeDataEntryUncheckedCreateInput = {
    id?: string
    timestamp?: Date | string
    transportId: string
    dataEntryId: string
  }

  export type RealtimeDataEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    transport?: TransportUpdateOneRequiredWithoutRealtimeDataNestedInput
    dataEntry?: DataEntryUpdateOneRequiredWithoutRealtimeDataEntryNestedInput
  }

  export type RealtimeDataEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    transportId?: StringFieldUpdateOperationsInput | string
    dataEntryId?: StringFieldUpdateOperationsInput | string
  }

  export type RealtimeDataEntryCreateManyInput = {
    id?: string
    timestamp?: Date | string
    transportId: string
    dataEntryId: string
  }

  export type RealtimeDataEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RealtimeDataEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    transportId?: StringFieldUpdateOperationsInput | string
    dataEntryId?: StringFieldUpdateOperationsInput | string
  }

  export type DataEntryCreateInput = {
    id?: string
    payload: JsonNullValueInput | InputJsonValue
    RealtimeDataEntry?: RealtimeDataEntryCreateNestedManyWithoutDataEntryInput
  }

  export type DataEntryUncheckedCreateInput = {
    id?: string
    payload: JsonNullValueInput | InputJsonValue
    RealtimeDataEntry?: RealtimeDataEntryUncheckedCreateNestedManyWithoutDataEntryInput
  }

  export type DataEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    RealtimeDataEntry?: RealtimeDataEntryUpdateManyWithoutDataEntryNestedInput
  }

  export type DataEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    RealtimeDataEntry?: RealtimeDataEntryUncheckedUpdateManyWithoutDataEntryNestedInput
  }

  export type DataEntryCreateManyInput = {
    id?: string
    payload: JsonNullValueInput | InputJsonValue
  }

  export type DataEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
  }

  export type DataEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    messages?: MessageCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    messages?: MessageUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    messages?: MessageUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ForumCreateInput = {
    id?: string
    title: string
    type: string
    messages?: MessageCreateNestedManyWithoutForumInput
  }

  export type ForumUncheckedCreateInput = {
    id?: string
    title: string
    type: string
    messages?: MessageUncheckedCreateNestedManyWithoutForumInput
  }

  export type ForumUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    messages?: MessageUpdateManyWithoutForumNestedInput
  }

  export type ForumUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutForumNestedInput
  }

  export type ForumCreateManyInput = {
    id?: string
    title: string
    type: string
  }

  export type ForumUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ForumUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMessagesInput
    forum: ForumCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    userId: string
    forumId: string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
    forum?: ForumUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    forumId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    createdAt?: Date | string
    userId: string
    forumId: string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    forumId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TransportEventListRelationFilter = {
    every?: TransportEventWhereInput
    some?: TransportEventWhereInput
    none?: TransportEventWhereInput
  }

  export type RealtimeDataEntryListRelationFilter = {
    every?: RealtimeDataEntryWhereInput
    some?: RealtimeDataEntryWhereInput
    none?: RealtimeDataEntryWhereInput
  }

  export type TransportEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RealtimeDataEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransportCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    line?: SortOrder
  }

  export type TransportMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    line?: SortOrder
  }

  export type TransportMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    line?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TransportScalarRelationFilter = {
    is?: TransportWhereInput
    isNot?: TransportWhereInput
  }

  export type TransportEventCountOrderByAggregateInput = {
    id?: SortOrder
    transportId?: SortOrder
    timestamp?: SortOrder
    payload?: SortOrder
  }

  export type TransportEventMaxOrderByAggregateInput = {
    id?: SortOrder
    transportId?: SortOrder
    timestamp?: SortOrder
  }

  export type TransportEventMinOrderByAggregateInput = {
    id?: SortOrder
    transportId?: SortOrder
    timestamp?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DataEntryScalarRelationFilter = {
    is?: DataEntryWhereInput
    isNot?: DataEntryWhereInput
  }

  export type RealtimeDataEntryCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    transportId?: SortOrder
    dataEntryId?: SortOrder
  }

  export type RealtimeDataEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    transportId?: SortOrder
    dataEntryId?: SortOrder
  }

  export type RealtimeDataEntryMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    transportId?: SortOrder
    dataEntryId?: SortOrder
  }

  export type DataEntryCountOrderByAggregateInput = {
    id?: SortOrder
    payload?: SortOrder
  }

  export type DataEntryMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DataEntryMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type ForumCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
  }

  export type ForumMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
  }

  export type ForumMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ForumScalarRelationFilter = {
    is?: ForumWhereInput
    isNot?: ForumWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    forumId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    forumId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    forumId?: SortOrder
  }

  export type TransportEventCreateNestedManyWithoutTransportInput = {
    create?: XOR<TransportEventCreateWithoutTransportInput, TransportEventUncheckedCreateWithoutTransportInput> | TransportEventCreateWithoutTransportInput[] | TransportEventUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: TransportEventCreateOrConnectWithoutTransportInput | TransportEventCreateOrConnectWithoutTransportInput[]
    createMany?: TransportEventCreateManyTransportInputEnvelope
    connect?: TransportEventWhereUniqueInput | TransportEventWhereUniqueInput[]
  }

  export type RealtimeDataEntryCreateNestedManyWithoutTransportInput = {
    create?: XOR<RealtimeDataEntryCreateWithoutTransportInput, RealtimeDataEntryUncheckedCreateWithoutTransportInput> | RealtimeDataEntryCreateWithoutTransportInput[] | RealtimeDataEntryUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: RealtimeDataEntryCreateOrConnectWithoutTransportInput | RealtimeDataEntryCreateOrConnectWithoutTransportInput[]
    createMany?: RealtimeDataEntryCreateManyTransportInputEnvelope
    connect?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
  }

  export type TransportEventUncheckedCreateNestedManyWithoutTransportInput = {
    create?: XOR<TransportEventCreateWithoutTransportInput, TransportEventUncheckedCreateWithoutTransportInput> | TransportEventCreateWithoutTransportInput[] | TransportEventUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: TransportEventCreateOrConnectWithoutTransportInput | TransportEventCreateOrConnectWithoutTransportInput[]
    createMany?: TransportEventCreateManyTransportInputEnvelope
    connect?: TransportEventWhereUniqueInput | TransportEventWhereUniqueInput[]
  }

  export type RealtimeDataEntryUncheckedCreateNestedManyWithoutTransportInput = {
    create?: XOR<RealtimeDataEntryCreateWithoutTransportInput, RealtimeDataEntryUncheckedCreateWithoutTransportInput> | RealtimeDataEntryCreateWithoutTransportInput[] | RealtimeDataEntryUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: RealtimeDataEntryCreateOrConnectWithoutTransportInput | RealtimeDataEntryCreateOrConnectWithoutTransportInput[]
    createMany?: RealtimeDataEntryCreateManyTransportInputEnvelope
    connect?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TransportEventUpdateManyWithoutTransportNestedInput = {
    create?: XOR<TransportEventCreateWithoutTransportInput, TransportEventUncheckedCreateWithoutTransportInput> | TransportEventCreateWithoutTransportInput[] | TransportEventUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: TransportEventCreateOrConnectWithoutTransportInput | TransportEventCreateOrConnectWithoutTransportInput[]
    upsert?: TransportEventUpsertWithWhereUniqueWithoutTransportInput | TransportEventUpsertWithWhereUniqueWithoutTransportInput[]
    createMany?: TransportEventCreateManyTransportInputEnvelope
    set?: TransportEventWhereUniqueInput | TransportEventWhereUniqueInput[]
    disconnect?: TransportEventWhereUniqueInput | TransportEventWhereUniqueInput[]
    delete?: TransportEventWhereUniqueInput | TransportEventWhereUniqueInput[]
    connect?: TransportEventWhereUniqueInput | TransportEventWhereUniqueInput[]
    update?: TransportEventUpdateWithWhereUniqueWithoutTransportInput | TransportEventUpdateWithWhereUniqueWithoutTransportInput[]
    updateMany?: TransportEventUpdateManyWithWhereWithoutTransportInput | TransportEventUpdateManyWithWhereWithoutTransportInput[]
    deleteMany?: TransportEventScalarWhereInput | TransportEventScalarWhereInput[]
  }

  export type RealtimeDataEntryUpdateManyWithoutTransportNestedInput = {
    create?: XOR<RealtimeDataEntryCreateWithoutTransportInput, RealtimeDataEntryUncheckedCreateWithoutTransportInput> | RealtimeDataEntryCreateWithoutTransportInput[] | RealtimeDataEntryUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: RealtimeDataEntryCreateOrConnectWithoutTransportInput | RealtimeDataEntryCreateOrConnectWithoutTransportInput[]
    upsert?: RealtimeDataEntryUpsertWithWhereUniqueWithoutTransportInput | RealtimeDataEntryUpsertWithWhereUniqueWithoutTransportInput[]
    createMany?: RealtimeDataEntryCreateManyTransportInputEnvelope
    set?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
    disconnect?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
    delete?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
    connect?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
    update?: RealtimeDataEntryUpdateWithWhereUniqueWithoutTransportInput | RealtimeDataEntryUpdateWithWhereUniqueWithoutTransportInput[]
    updateMany?: RealtimeDataEntryUpdateManyWithWhereWithoutTransportInput | RealtimeDataEntryUpdateManyWithWhereWithoutTransportInput[]
    deleteMany?: RealtimeDataEntryScalarWhereInput | RealtimeDataEntryScalarWhereInput[]
  }

  export type TransportEventUncheckedUpdateManyWithoutTransportNestedInput = {
    create?: XOR<TransportEventCreateWithoutTransportInput, TransportEventUncheckedCreateWithoutTransportInput> | TransportEventCreateWithoutTransportInput[] | TransportEventUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: TransportEventCreateOrConnectWithoutTransportInput | TransportEventCreateOrConnectWithoutTransportInput[]
    upsert?: TransportEventUpsertWithWhereUniqueWithoutTransportInput | TransportEventUpsertWithWhereUniqueWithoutTransportInput[]
    createMany?: TransportEventCreateManyTransportInputEnvelope
    set?: TransportEventWhereUniqueInput | TransportEventWhereUniqueInput[]
    disconnect?: TransportEventWhereUniqueInput | TransportEventWhereUniqueInput[]
    delete?: TransportEventWhereUniqueInput | TransportEventWhereUniqueInput[]
    connect?: TransportEventWhereUniqueInput | TransportEventWhereUniqueInput[]
    update?: TransportEventUpdateWithWhereUniqueWithoutTransportInput | TransportEventUpdateWithWhereUniqueWithoutTransportInput[]
    updateMany?: TransportEventUpdateManyWithWhereWithoutTransportInput | TransportEventUpdateManyWithWhereWithoutTransportInput[]
    deleteMany?: TransportEventScalarWhereInput | TransportEventScalarWhereInput[]
  }

  export type RealtimeDataEntryUncheckedUpdateManyWithoutTransportNestedInput = {
    create?: XOR<RealtimeDataEntryCreateWithoutTransportInput, RealtimeDataEntryUncheckedCreateWithoutTransportInput> | RealtimeDataEntryCreateWithoutTransportInput[] | RealtimeDataEntryUncheckedCreateWithoutTransportInput[]
    connectOrCreate?: RealtimeDataEntryCreateOrConnectWithoutTransportInput | RealtimeDataEntryCreateOrConnectWithoutTransportInput[]
    upsert?: RealtimeDataEntryUpsertWithWhereUniqueWithoutTransportInput | RealtimeDataEntryUpsertWithWhereUniqueWithoutTransportInput[]
    createMany?: RealtimeDataEntryCreateManyTransportInputEnvelope
    set?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
    disconnect?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
    delete?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
    connect?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
    update?: RealtimeDataEntryUpdateWithWhereUniqueWithoutTransportInput | RealtimeDataEntryUpdateWithWhereUniqueWithoutTransportInput[]
    updateMany?: RealtimeDataEntryUpdateManyWithWhereWithoutTransportInput | RealtimeDataEntryUpdateManyWithWhereWithoutTransportInput[]
    deleteMany?: RealtimeDataEntryScalarWhereInput | RealtimeDataEntryScalarWhereInput[]
  }

  export type TransportCreateNestedOneWithoutEventsInput = {
    create?: XOR<TransportCreateWithoutEventsInput, TransportUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TransportCreateOrConnectWithoutEventsInput
    connect?: TransportWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TransportUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<TransportCreateWithoutEventsInput, TransportUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TransportCreateOrConnectWithoutEventsInput
    upsert?: TransportUpsertWithoutEventsInput
    connect?: TransportWhereUniqueInput
    update?: XOR<XOR<TransportUpdateToOneWithWhereWithoutEventsInput, TransportUpdateWithoutEventsInput>, TransportUncheckedUpdateWithoutEventsInput>
  }

  export type TransportCreateNestedOneWithoutRealtimeDataInput = {
    create?: XOR<TransportCreateWithoutRealtimeDataInput, TransportUncheckedCreateWithoutRealtimeDataInput>
    connectOrCreate?: TransportCreateOrConnectWithoutRealtimeDataInput
    connect?: TransportWhereUniqueInput
  }

  export type DataEntryCreateNestedOneWithoutRealtimeDataEntryInput = {
    create?: XOR<DataEntryCreateWithoutRealtimeDataEntryInput, DataEntryUncheckedCreateWithoutRealtimeDataEntryInput>
    connectOrCreate?: DataEntryCreateOrConnectWithoutRealtimeDataEntryInput
    connect?: DataEntryWhereUniqueInput
  }

  export type TransportUpdateOneRequiredWithoutRealtimeDataNestedInput = {
    create?: XOR<TransportCreateWithoutRealtimeDataInput, TransportUncheckedCreateWithoutRealtimeDataInput>
    connectOrCreate?: TransportCreateOrConnectWithoutRealtimeDataInput
    upsert?: TransportUpsertWithoutRealtimeDataInput
    connect?: TransportWhereUniqueInput
    update?: XOR<XOR<TransportUpdateToOneWithWhereWithoutRealtimeDataInput, TransportUpdateWithoutRealtimeDataInput>, TransportUncheckedUpdateWithoutRealtimeDataInput>
  }

  export type DataEntryUpdateOneRequiredWithoutRealtimeDataEntryNestedInput = {
    create?: XOR<DataEntryCreateWithoutRealtimeDataEntryInput, DataEntryUncheckedCreateWithoutRealtimeDataEntryInput>
    connectOrCreate?: DataEntryCreateOrConnectWithoutRealtimeDataEntryInput
    upsert?: DataEntryUpsertWithoutRealtimeDataEntryInput
    connect?: DataEntryWhereUniqueInput
    update?: XOR<XOR<DataEntryUpdateToOneWithWhereWithoutRealtimeDataEntryInput, DataEntryUpdateWithoutRealtimeDataEntryInput>, DataEntryUncheckedUpdateWithoutRealtimeDataEntryInput>
  }

  export type RealtimeDataEntryCreateNestedManyWithoutDataEntryInput = {
    create?: XOR<RealtimeDataEntryCreateWithoutDataEntryInput, RealtimeDataEntryUncheckedCreateWithoutDataEntryInput> | RealtimeDataEntryCreateWithoutDataEntryInput[] | RealtimeDataEntryUncheckedCreateWithoutDataEntryInput[]
    connectOrCreate?: RealtimeDataEntryCreateOrConnectWithoutDataEntryInput | RealtimeDataEntryCreateOrConnectWithoutDataEntryInput[]
    createMany?: RealtimeDataEntryCreateManyDataEntryInputEnvelope
    connect?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
  }

  export type RealtimeDataEntryUncheckedCreateNestedManyWithoutDataEntryInput = {
    create?: XOR<RealtimeDataEntryCreateWithoutDataEntryInput, RealtimeDataEntryUncheckedCreateWithoutDataEntryInput> | RealtimeDataEntryCreateWithoutDataEntryInput[] | RealtimeDataEntryUncheckedCreateWithoutDataEntryInput[]
    connectOrCreate?: RealtimeDataEntryCreateOrConnectWithoutDataEntryInput | RealtimeDataEntryCreateOrConnectWithoutDataEntryInput[]
    createMany?: RealtimeDataEntryCreateManyDataEntryInputEnvelope
    connect?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
  }

  export type RealtimeDataEntryUpdateManyWithoutDataEntryNestedInput = {
    create?: XOR<RealtimeDataEntryCreateWithoutDataEntryInput, RealtimeDataEntryUncheckedCreateWithoutDataEntryInput> | RealtimeDataEntryCreateWithoutDataEntryInput[] | RealtimeDataEntryUncheckedCreateWithoutDataEntryInput[]
    connectOrCreate?: RealtimeDataEntryCreateOrConnectWithoutDataEntryInput | RealtimeDataEntryCreateOrConnectWithoutDataEntryInput[]
    upsert?: RealtimeDataEntryUpsertWithWhereUniqueWithoutDataEntryInput | RealtimeDataEntryUpsertWithWhereUniqueWithoutDataEntryInput[]
    createMany?: RealtimeDataEntryCreateManyDataEntryInputEnvelope
    set?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
    disconnect?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
    delete?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
    connect?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
    update?: RealtimeDataEntryUpdateWithWhereUniqueWithoutDataEntryInput | RealtimeDataEntryUpdateWithWhereUniqueWithoutDataEntryInput[]
    updateMany?: RealtimeDataEntryUpdateManyWithWhereWithoutDataEntryInput | RealtimeDataEntryUpdateManyWithWhereWithoutDataEntryInput[]
    deleteMany?: RealtimeDataEntryScalarWhereInput | RealtimeDataEntryScalarWhereInput[]
  }

  export type RealtimeDataEntryUncheckedUpdateManyWithoutDataEntryNestedInput = {
    create?: XOR<RealtimeDataEntryCreateWithoutDataEntryInput, RealtimeDataEntryUncheckedCreateWithoutDataEntryInput> | RealtimeDataEntryCreateWithoutDataEntryInput[] | RealtimeDataEntryUncheckedCreateWithoutDataEntryInput[]
    connectOrCreate?: RealtimeDataEntryCreateOrConnectWithoutDataEntryInput | RealtimeDataEntryCreateOrConnectWithoutDataEntryInput[]
    upsert?: RealtimeDataEntryUpsertWithWhereUniqueWithoutDataEntryInput | RealtimeDataEntryUpsertWithWhereUniqueWithoutDataEntryInput[]
    createMany?: RealtimeDataEntryCreateManyDataEntryInputEnvelope
    set?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
    disconnect?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
    delete?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
    connect?: RealtimeDataEntryWhereUniqueInput | RealtimeDataEntryWhereUniqueInput[]
    update?: RealtimeDataEntryUpdateWithWhereUniqueWithoutDataEntryInput | RealtimeDataEntryUpdateWithWhereUniqueWithoutDataEntryInput[]
    updateMany?: RealtimeDataEntryUpdateManyWithWhereWithoutDataEntryInput | RealtimeDataEntryUpdateManyWithWhereWithoutDataEntryInput[]
    deleteMany?: RealtimeDataEntryScalarWhereInput | RealtimeDataEntryScalarWhereInput[]
  }

  export type MessageCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageCreateNestedManyWithoutForumInput = {
    create?: XOR<MessageCreateWithoutForumInput, MessageUncheckedCreateWithoutForumInput> | MessageCreateWithoutForumInput[] | MessageUncheckedCreateWithoutForumInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutForumInput | MessageCreateOrConnectWithoutForumInput[]
    createMany?: MessageCreateManyForumInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutForumInput = {
    create?: XOR<MessageCreateWithoutForumInput, MessageUncheckedCreateWithoutForumInput> | MessageCreateWithoutForumInput[] | MessageUncheckedCreateWithoutForumInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutForumInput | MessageCreateOrConnectWithoutForumInput[]
    createMany?: MessageCreateManyForumInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUpdateManyWithoutForumNestedInput = {
    create?: XOR<MessageCreateWithoutForumInput, MessageUncheckedCreateWithoutForumInput> | MessageCreateWithoutForumInput[] | MessageUncheckedCreateWithoutForumInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutForumInput | MessageCreateOrConnectWithoutForumInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutForumInput | MessageUpsertWithWhereUniqueWithoutForumInput[]
    createMany?: MessageCreateManyForumInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutForumInput | MessageUpdateWithWhereUniqueWithoutForumInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutForumInput | MessageUpdateManyWithWhereWithoutForumInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutForumNestedInput = {
    create?: XOR<MessageCreateWithoutForumInput, MessageUncheckedCreateWithoutForumInput> | MessageCreateWithoutForumInput[] | MessageUncheckedCreateWithoutForumInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutForumInput | MessageCreateOrConnectWithoutForumInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutForumInput | MessageUpsertWithWhereUniqueWithoutForumInput[]
    createMany?: MessageCreateManyForumInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutForumInput | MessageUpdateWithWhereUniqueWithoutForumInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutForumInput | MessageUpdateManyWithWhereWithoutForumInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ForumCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ForumCreateWithoutMessagesInput, ForumUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ForumCreateOrConnectWithoutMessagesInput
    connect?: ForumWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type ForumUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ForumCreateWithoutMessagesInput, ForumUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ForumCreateOrConnectWithoutMessagesInput
    upsert?: ForumUpsertWithoutMessagesInput
    connect?: ForumWhereUniqueInput
    update?: XOR<XOR<ForumUpdateToOneWithWhereWithoutMessagesInput, ForumUpdateWithoutMessagesInput>, ForumUncheckedUpdateWithoutMessagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type TransportEventCreateWithoutTransportInput = {
    id?: string
    timestamp: Date | string
    payload: JsonNullValueInput | InputJsonValue
  }

  export type TransportEventUncheckedCreateWithoutTransportInput = {
    id?: string
    timestamp: Date | string
    payload: JsonNullValueInput | InputJsonValue
  }

  export type TransportEventCreateOrConnectWithoutTransportInput = {
    where: TransportEventWhereUniqueInput
    create: XOR<TransportEventCreateWithoutTransportInput, TransportEventUncheckedCreateWithoutTransportInput>
  }

  export type TransportEventCreateManyTransportInputEnvelope = {
    data: TransportEventCreateManyTransportInput | TransportEventCreateManyTransportInput[]
    skipDuplicates?: boolean
  }

  export type RealtimeDataEntryCreateWithoutTransportInput = {
    id?: string
    timestamp?: Date | string
    dataEntry: DataEntryCreateNestedOneWithoutRealtimeDataEntryInput
  }

  export type RealtimeDataEntryUncheckedCreateWithoutTransportInput = {
    id?: string
    timestamp?: Date | string
    dataEntryId: string
  }

  export type RealtimeDataEntryCreateOrConnectWithoutTransportInput = {
    where: RealtimeDataEntryWhereUniqueInput
    create: XOR<RealtimeDataEntryCreateWithoutTransportInput, RealtimeDataEntryUncheckedCreateWithoutTransportInput>
  }

  export type RealtimeDataEntryCreateManyTransportInputEnvelope = {
    data: RealtimeDataEntryCreateManyTransportInput | RealtimeDataEntryCreateManyTransportInput[]
    skipDuplicates?: boolean
  }

  export type TransportEventUpsertWithWhereUniqueWithoutTransportInput = {
    where: TransportEventWhereUniqueInput
    update: XOR<TransportEventUpdateWithoutTransportInput, TransportEventUncheckedUpdateWithoutTransportInput>
    create: XOR<TransportEventCreateWithoutTransportInput, TransportEventUncheckedCreateWithoutTransportInput>
  }

  export type TransportEventUpdateWithWhereUniqueWithoutTransportInput = {
    where: TransportEventWhereUniqueInput
    data: XOR<TransportEventUpdateWithoutTransportInput, TransportEventUncheckedUpdateWithoutTransportInput>
  }

  export type TransportEventUpdateManyWithWhereWithoutTransportInput = {
    where: TransportEventScalarWhereInput
    data: XOR<TransportEventUpdateManyMutationInput, TransportEventUncheckedUpdateManyWithoutTransportInput>
  }

  export type TransportEventScalarWhereInput = {
    AND?: TransportEventScalarWhereInput | TransportEventScalarWhereInput[]
    OR?: TransportEventScalarWhereInput[]
    NOT?: TransportEventScalarWhereInput | TransportEventScalarWhereInput[]
    id?: StringFilter<"TransportEvent"> | string
    transportId?: StringFilter<"TransportEvent"> | string
    timestamp?: DateTimeFilter<"TransportEvent"> | Date | string
    payload?: JsonFilter<"TransportEvent">
  }

  export type RealtimeDataEntryUpsertWithWhereUniqueWithoutTransportInput = {
    where: RealtimeDataEntryWhereUniqueInput
    update: XOR<RealtimeDataEntryUpdateWithoutTransportInput, RealtimeDataEntryUncheckedUpdateWithoutTransportInput>
    create: XOR<RealtimeDataEntryCreateWithoutTransportInput, RealtimeDataEntryUncheckedCreateWithoutTransportInput>
  }

  export type RealtimeDataEntryUpdateWithWhereUniqueWithoutTransportInput = {
    where: RealtimeDataEntryWhereUniqueInput
    data: XOR<RealtimeDataEntryUpdateWithoutTransportInput, RealtimeDataEntryUncheckedUpdateWithoutTransportInput>
  }

  export type RealtimeDataEntryUpdateManyWithWhereWithoutTransportInput = {
    where: RealtimeDataEntryScalarWhereInput
    data: XOR<RealtimeDataEntryUpdateManyMutationInput, RealtimeDataEntryUncheckedUpdateManyWithoutTransportInput>
  }

  export type RealtimeDataEntryScalarWhereInput = {
    AND?: RealtimeDataEntryScalarWhereInput | RealtimeDataEntryScalarWhereInput[]
    OR?: RealtimeDataEntryScalarWhereInput[]
    NOT?: RealtimeDataEntryScalarWhereInput | RealtimeDataEntryScalarWhereInput[]
    id?: StringFilter<"RealtimeDataEntry"> | string
    timestamp?: DateTimeFilter<"RealtimeDataEntry"> | Date | string
    transportId?: StringFilter<"RealtimeDataEntry"> | string
    dataEntryId?: StringFilter<"RealtimeDataEntry"> | string
  }

  export type TransportCreateWithoutEventsInput = {
    id?: string
    type: string
    line: string
    realtimeData?: RealtimeDataEntryCreateNestedManyWithoutTransportInput
  }

  export type TransportUncheckedCreateWithoutEventsInput = {
    id?: string
    type: string
    line: string
    realtimeData?: RealtimeDataEntryUncheckedCreateNestedManyWithoutTransportInput
  }

  export type TransportCreateOrConnectWithoutEventsInput = {
    where: TransportWhereUniqueInput
    create: XOR<TransportCreateWithoutEventsInput, TransportUncheckedCreateWithoutEventsInput>
  }

  export type TransportUpsertWithoutEventsInput = {
    update: XOR<TransportUpdateWithoutEventsInput, TransportUncheckedUpdateWithoutEventsInput>
    create: XOR<TransportCreateWithoutEventsInput, TransportUncheckedCreateWithoutEventsInput>
    where?: TransportWhereInput
  }

  export type TransportUpdateToOneWithWhereWithoutEventsInput = {
    where?: TransportWhereInput
    data: XOR<TransportUpdateWithoutEventsInput, TransportUncheckedUpdateWithoutEventsInput>
  }

  export type TransportUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    realtimeData?: RealtimeDataEntryUpdateManyWithoutTransportNestedInput
  }

  export type TransportUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    realtimeData?: RealtimeDataEntryUncheckedUpdateManyWithoutTransportNestedInput
  }

  export type TransportCreateWithoutRealtimeDataInput = {
    id?: string
    type: string
    line: string
    events?: TransportEventCreateNestedManyWithoutTransportInput
  }

  export type TransportUncheckedCreateWithoutRealtimeDataInput = {
    id?: string
    type: string
    line: string
    events?: TransportEventUncheckedCreateNestedManyWithoutTransportInput
  }

  export type TransportCreateOrConnectWithoutRealtimeDataInput = {
    where: TransportWhereUniqueInput
    create: XOR<TransportCreateWithoutRealtimeDataInput, TransportUncheckedCreateWithoutRealtimeDataInput>
  }

  export type DataEntryCreateWithoutRealtimeDataEntryInput = {
    id?: string
    payload: JsonNullValueInput | InputJsonValue
  }

  export type DataEntryUncheckedCreateWithoutRealtimeDataEntryInput = {
    id?: string
    payload: JsonNullValueInput | InputJsonValue
  }

  export type DataEntryCreateOrConnectWithoutRealtimeDataEntryInput = {
    where: DataEntryWhereUniqueInput
    create: XOR<DataEntryCreateWithoutRealtimeDataEntryInput, DataEntryUncheckedCreateWithoutRealtimeDataEntryInput>
  }

  export type TransportUpsertWithoutRealtimeDataInput = {
    update: XOR<TransportUpdateWithoutRealtimeDataInput, TransportUncheckedUpdateWithoutRealtimeDataInput>
    create: XOR<TransportCreateWithoutRealtimeDataInput, TransportUncheckedCreateWithoutRealtimeDataInput>
    where?: TransportWhereInput
  }

  export type TransportUpdateToOneWithWhereWithoutRealtimeDataInput = {
    where?: TransportWhereInput
    data: XOR<TransportUpdateWithoutRealtimeDataInput, TransportUncheckedUpdateWithoutRealtimeDataInput>
  }

  export type TransportUpdateWithoutRealtimeDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    events?: TransportEventUpdateManyWithoutTransportNestedInput
  }

  export type TransportUncheckedUpdateWithoutRealtimeDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    line?: StringFieldUpdateOperationsInput | string
    events?: TransportEventUncheckedUpdateManyWithoutTransportNestedInput
  }

  export type DataEntryUpsertWithoutRealtimeDataEntryInput = {
    update: XOR<DataEntryUpdateWithoutRealtimeDataEntryInput, DataEntryUncheckedUpdateWithoutRealtimeDataEntryInput>
    create: XOR<DataEntryCreateWithoutRealtimeDataEntryInput, DataEntryUncheckedCreateWithoutRealtimeDataEntryInput>
    where?: DataEntryWhereInput
  }

  export type DataEntryUpdateToOneWithWhereWithoutRealtimeDataEntryInput = {
    where?: DataEntryWhereInput
    data: XOR<DataEntryUpdateWithoutRealtimeDataEntryInput, DataEntryUncheckedUpdateWithoutRealtimeDataEntryInput>
  }

  export type DataEntryUpdateWithoutRealtimeDataEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
  }

  export type DataEntryUncheckedUpdateWithoutRealtimeDataEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
  }

  export type RealtimeDataEntryCreateWithoutDataEntryInput = {
    id?: string
    timestamp?: Date | string
    transport: TransportCreateNestedOneWithoutRealtimeDataInput
  }

  export type RealtimeDataEntryUncheckedCreateWithoutDataEntryInput = {
    id?: string
    timestamp?: Date | string
    transportId: string
  }

  export type RealtimeDataEntryCreateOrConnectWithoutDataEntryInput = {
    where: RealtimeDataEntryWhereUniqueInput
    create: XOR<RealtimeDataEntryCreateWithoutDataEntryInput, RealtimeDataEntryUncheckedCreateWithoutDataEntryInput>
  }

  export type RealtimeDataEntryCreateManyDataEntryInputEnvelope = {
    data: RealtimeDataEntryCreateManyDataEntryInput | RealtimeDataEntryCreateManyDataEntryInput[]
    skipDuplicates?: boolean
  }

  export type RealtimeDataEntryUpsertWithWhereUniqueWithoutDataEntryInput = {
    where: RealtimeDataEntryWhereUniqueInput
    update: XOR<RealtimeDataEntryUpdateWithoutDataEntryInput, RealtimeDataEntryUncheckedUpdateWithoutDataEntryInput>
    create: XOR<RealtimeDataEntryCreateWithoutDataEntryInput, RealtimeDataEntryUncheckedCreateWithoutDataEntryInput>
  }

  export type RealtimeDataEntryUpdateWithWhereUniqueWithoutDataEntryInput = {
    where: RealtimeDataEntryWhereUniqueInput
    data: XOR<RealtimeDataEntryUpdateWithoutDataEntryInput, RealtimeDataEntryUncheckedUpdateWithoutDataEntryInput>
  }

  export type RealtimeDataEntryUpdateManyWithWhereWithoutDataEntryInput = {
    where: RealtimeDataEntryScalarWhereInput
    data: XOR<RealtimeDataEntryUpdateManyMutationInput, RealtimeDataEntryUncheckedUpdateManyWithoutDataEntryInput>
  }

  export type MessageCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    forum: ForumCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    forumId: string
  }

  export type MessageCreateOrConnectWithoutUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateManyUserInputEnvelope = {
    data: MessageCreateManyUserInput | MessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    userId?: StringFilter<"Message"> | string
    forumId?: StringFilter<"Message"> | string
  }

  export type MessageCreateWithoutForumInput = {
    id?: string
    content: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutForumInput = {
    id?: string
    content: string
    createdAt?: Date | string
    userId: string
  }

  export type MessageCreateOrConnectWithoutForumInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutForumInput, MessageUncheckedCreateWithoutForumInput>
  }

  export type MessageCreateManyForumInputEnvelope = {
    data: MessageCreateManyForumInput | MessageCreateManyForumInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutForumInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutForumInput, MessageUncheckedUpdateWithoutForumInput>
    create: XOR<MessageCreateWithoutForumInput, MessageUncheckedCreateWithoutForumInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutForumInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutForumInput, MessageUncheckedUpdateWithoutForumInput>
  }

  export type MessageUpdateManyWithWhereWithoutForumInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutForumInput>
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    username: string
    email: string
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    username: string
    email: string
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type ForumCreateWithoutMessagesInput = {
    id?: string
    title: string
    type: string
  }

  export type ForumUncheckedCreateWithoutMessagesInput = {
    id?: string
    title: string
    type: string
  }

  export type ForumCreateOrConnectWithoutMessagesInput = {
    where: ForumWhereUniqueInput
    create: XOR<ForumCreateWithoutMessagesInput, ForumUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ForumUpsertWithoutMessagesInput = {
    update: XOR<ForumUpdateWithoutMessagesInput, ForumUncheckedUpdateWithoutMessagesInput>
    create: XOR<ForumCreateWithoutMessagesInput, ForumUncheckedCreateWithoutMessagesInput>
    where?: ForumWhereInput
  }

  export type ForumUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ForumWhereInput
    data: XOR<ForumUpdateWithoutMessagesInput, ForumUncheckedUpdateWithoutMessagesInput>
  }

  export type ForumUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ForumUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TransportEventCreateManyTransportInput = {
    id?: string
    timestamp: Date | string
    payload: JsonNullValueInput | InputJsonValue
  }

  export type RealtimeDataEntryCreateManyTransportInput = {
    id?: string
    timestamp?: Date | string
    dataEntryId: string
  }

  export type TransportEventUpdateWithoutTransportInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: JsonNullValueInput | InputJsonValue
  }

  export type TransportEventUncheckedUpdateWithoutTransportInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: JsonNullValueInput | InputJsonValue
  }

  export type TransportEventUncheckedUpdateManyWithoutTransportInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    payload?: JsonNullValueInput | InputJsonValue
  }

  export type RealtimeDataEntryUpdateWithoutTransportInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEntry?: DataEntryUpdateOneRequiredWithoutRealtimeDataEntryNestedInput
  }

  export type RealtimeDataEntryUncheckedUpdateWithoutTransportInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEntryId?: StringFieldUpdateOperationsInput | string
  }

  export type RealtimeDataEntryUncheckedUpdateManyWithoutTransportInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEntryId?: StringFieldUpdateOperationsInput | string
  }

  export type RealtimeDataEntryCreateManyDataEntryInput = {
    id?: string
    timestamp?: Date | string
    transportId: string
  }

  export type RealtimeDataEntryUpdateWithoutDataEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    transport?: TransportUpdateOneRequiredWithoutRealtimeDataNestedInput
  }

  export type RealtimeDataEntryUncheckedUpdateWithoutDataEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    transportId?: StringFieldUpdateOperationsInput | string
  }

  export type RealtimeDataEntryUncheckedUpdateManyWithoutDataEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    transportId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyUserInput = {
    id?: string
    content: string
    createdAt?: Date | string
    forumId: string
  }

  export type MessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    forum?: ForumUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    forumId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    forumId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyForumInput = {
    id?: string
    content: string
    createdAt?: Date | string
    userId: string
  }

  export type MessageUpdateWithoutForumInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutForumInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutForumInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}