
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
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model goodIdea
 * 
 */
export type goodIdea = $Result.DefaultSelection<Prisma.$goodIdeaPayload>
/**
 * Model badIdea
 * 
 */
export type badIdea = $Result.DefaultSelection<Prisma.$badIdeaPayload>
/**
 * Model interest
 * 
 */
export type interest = $Result.DefaultSelection<Prisma.$interestPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model ChatGroup
 * 
 */
export type ChatGroup = $Result.DefaultSelection<Prisma.$ChatGroupPayload>
/**
 * Model ChatGroupUser
 * 
 */
export type ChatGroupUser = $Result.DefaultSelection<Prisma.$ChatGroupUserPayload>
/**
 * Model Invitation
 * 
 */
export type Invitation = $Result.DefaultSelection<Prisma.$InvitationPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;

  /**
   * `prisma.goodIdea`: Exposes CRUD operations for the **goodIdea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoodIdeas
    * const goodIdeas = await prisma.goodIdea.findMany()
    * ```
    */
  get goodIdea(): Prisma.goodIdeaDelegate<ExtArgs>;

  /**
   * `prisma.badIdea`: Exposes CRUD operations for the **badIdea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BadIdeas
    * const badIdeas = await prisma.badIdea.findMany()
    * ```
    */
  get badIdea(): Prisma.badIdeaDelegate<ExtArgs>;

  /**
   * `prisma.interest`: Exposes CRUD operations for the **interest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Interests
    * const interests = await prisma.interest.findMany()
    * ```
    */
  get interest(): Prisma.interestDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs>;

  /**
   * `prisma.chatGroup`: Exposes CRUD operations for the **ChatGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatGroups
    * const chatGroups = await prisma.chatGroup.findMany()
    * ```
    */
  get chatGroup(): Prisma.ChatGroupDelegate<ExtArgs>;

  /**
   * `prisma.chatGroupUser`: Exposes CRUD operations for the **ChatGroupUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatGroupUsers
    * const chatGroupUsers = await prisma.chatGroupUser.findMany()
    * ```
    */
  get chatGroupUser(): Prisma.ChatGroupUserDelegate<ExtArgs>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **Invitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitation.findMany()
    * ```
    */
  get invitation(): Prisma.InvitationDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Post: 'Post',
    goodIdea: 'goodIdea',
    badIdea: 'badIdea',
    interest: 'interest',
    User: 'User',
    ChatMessage: 'ChatMessage',
    ChatGroup: 'ChatGroup',
    ChatGroupUser: 'ChatGroupUser',
    Invitation: 'Invitation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'post' | 'goodIdea' | 'badIdea' | 'interest' | 'user' | 'chatMessage' | 'chatGroup' | 'chatGroupUser' | 'invitation'
      txIsolationLevel: never
    },
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PostFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.PostAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      goodIdea: {
        payload: Prisma.$goodIdeaPayload<ExtArgs>
        fields: Prisma.goodIdeaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.goodIdeaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goodIdeaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.goodIdeaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goodIdeaPayload>
          }
          findFirst: {
            args: Prisma.goodIdeaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goodIdeaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.goodIdeaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goodIdeaPayload>
          }
          findMany: {
            args: Prisma.goodIdeaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goodIdeaPayload>[]
          }
          create: {
            args: Prisma.goodIdeaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goodIdeaPayload>
          }
          createMany: {
            args: Prisma.goodIdeaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.goodIdeaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goodIdeaPayload>
          }
          update: {
            args: Prisma.goodIdeaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goodIdeaPayload>
          }
          deleteMany: {
            args: Prisma.goodIdeaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.goodIdeaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.goodIdeaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$goodIdeaPayload>
          }
          aggregate: {
            args: Prisma.GoodIdeaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGoodIdea>
          }
          groupBy: {
            args: Prisma.goodIdeaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GoodIdeaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.goodIdeaFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.goodIdeaAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.goodIdeaCountArgs<ExtArgs>,
            result: $Utils.Optional<GoodIdeaCountAggregateOutputType> | number
          }
        }
      }
      badIdea: {
        payload: Prisma.$badIdeaPayload<ExtArgs>
        fields: Prisma.badIdeaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.badIdeaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$badIdeaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.badIdeaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$badIdeaPayload>
          }
          findFirst: {
            args: Prisma.badIdeaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$badIdeaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.badIdeaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$badIdeaPayload>
          }
          findMany: {
            args: Prisma.badIdeaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$badIdeaPayload>[]
          }
          create: {
            args: Prisma.badIdeaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$badIdeaPayload>
          }
          createMany: {
            args: Prisma.badIdeaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.badIdeaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$badIdeaPayload>
          }
          update: {
            args: Prisma.badIdeaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$badIdeaPayload>
          }
          deleteMany: {
            args: Prisma.badIdeaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.badIdeaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.badIdeaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$badIdeaPayload>
          }
          aggregate: {
            args: Prisma.BadIdeaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBadIdea>
          }
          groupBy: {
            args: Prisma.badIdeaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BadIdeaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.badIdeaFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.badIdeaAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.badIdeaCountArgs<ExtArgs>,
            result: $Utils.Optional<BadIdeaCountAggregateOutputType> | number
          }
        }
      }
      interest: {
        payload: Prisma.$interestPayload<ExtArgs>
        fields: Prisma.interestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.interestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$interestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.interestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$interestPayload>
          }
          findFirst: {
            args: Prisma.interestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$interestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.interestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$interestPayload>
          }
          findMany: {
            args: Prisma.interestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$interestPayload>[]
          }
          create: {
            args: Prisma.interestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$interestPayload>
          }
          createMany: {
            args: Prisma.interestCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.interestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$interestPayload>
          }
          update: {
            args: Prisma.interestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$interestPayload>
          }
          deleteMany: {
            args: Prisma.interestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.interestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.interestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$interestPayload>
          }
          aggregate: {
            args: Prisma.InterestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInterest>
          }
          groupBy: {
            args: Prisma.interestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InterestGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.interestFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.interestAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.interestCountArgs<ExtArgs>,
            result: $Utils.Optional<InterestCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ChatMessageFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ChatMessageAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>,
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      ChatGroup: {
        payload: Prisma.$ChatGroupPayload<ExtArgs>
        fields: Prisma.ChatGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatGroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatGroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          findFirst: {
            args: Prisma.ChatGroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatGroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          findMany: {
            args: Prisma.ChatGroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>[]
          }
          create: {
            args: Prisma.ChatGroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          createMany: {
            args: Prisma.ChatGroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChatGroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          update: {
            args: Prisma.ChatGroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          deleteMany: {
            args: Prisma.ChatGroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChatGroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChatGroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupPayload>
          }
          aggregate: {
            args: Prisma.ChatGroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChatGroup>
          }
          groupBy: {
            args: Prisma.ChatGroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChatGroupGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ChatGroupFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ChatGroupAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ChatGroupCountArgs<ExtArgs>,
            result: $Utils.Optional<ChatGroupCountAggregateOutputType> | number
          }
        }
      }
      ChatGroupUser: {
        payload: Prisma.$ChatGroupUserPayload<ExtArgs>
        fields: Prisma.ChatGroupUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatGroupUserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatGroupUserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupUserPayload>
          }
          findFirst: {
            args: Prisma.ChatGroupUserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatGroupUserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupUserPayload>
          }
          findMany: {
            args: Prisma.ChatGroupUserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupUserPayload>[]
          }
          create: {
            args: Prisma.ChatGroupUserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupUserPayload>
          }
          createMany: {
            args: Prisma.ChatGroupUserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChatGroupUserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupUserPayload>
          }
          update: {
            args: Prisma.ChatGroupUserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupUserPayload>
          }
          deleteMany: {
            args: Prisma.ChatGroupUserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChatGroupUserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChatGroupUserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGroupUserPayload>
          }
          aggregate: {
            args: Prisma.ChatGroupUserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChatGroupUser>
          }
          groupBy: {
            args: Prisma.ChatGroupUserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChatGroupUserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ChatGroupUserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ChatGroupUserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ChatGroupUserCountArgs<ExtArgs>,
            result: $Utils.Optional<ChatGroupUserCountAggregateOutputType> | number
          }
        }
      }
      Invitation: {
        payload: Prisma.$InvitationPayload<ExtArgs>
        fields: Prisma.InvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findFirst: {
            args: Prisma.InvitationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findMany: {
            args: Prisma.InvitationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          create: {
            args: Prisma.InvitationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          createMany: {
            args: Prisma.InvitationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InvitationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          update: {
            args: Prisma.InvitationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          deleteMany: {
            args: Prisma.InvitationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InvitationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InvitationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          aggregate: {
            args: Prisma.InvitationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInvitation>
          }
          groupBy: {
            args: Prisma.InvitationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InvitationGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InvitationFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.InvitationAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.InvitationCountArgs<ExtArgs>,
            result: $Utils.Optional<InvitationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    }
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
    | 'update'
    | 'updateMany'
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
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    interests: number
    goodIdeas: number
    badIdeas: number
    chatGroup: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interests?: boolean | PostCountOutputTypeCountInterestsArgs
    goodIdeas?: boolean | PostCountOutputTypeCountGoodIdeasArgs
    badIdeas?: boolean | PostCountOutputTypeCountBadIdeasArgs
    chatGroup?: boolean | PostCountOutputTypeCountChatGroupArgs
  }

  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: interestWhereInput
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountGoodIdeasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goodIdeaWhereInput
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountBadIdeasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: badIdeaWhereInput
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountChatGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupWhereInput
  }



  /**
   * Count Type InterestCountOutputType
   */

  export type InterestCountOutputType = {
    invitation: number
  }

  export type InterestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invitation?: boolean | InterestCountOutputTypeCountInvitationArgs
  }

  // Custom InputTypes

  /**
   * InterestCountOutputType without action
   */
  export type InterestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InterestCountOutputType
     */
    select?: InterestCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * InterestCountOutputType without action
   */
  export type InterestCountOutputTypeCountInvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
    goodIdeas: number
    badIdeas: number
    interests: number
    messages: number
    chatGroups: number
    Invitations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    goodIdeas?: boolean | UserCountOutputTypeCountGoodIdeasArgs
    badIdeas?: boolean | UserCountOutputTypeCountBadIdeasArgs
    interests?: boolean | UserCountOutputTypeCountInterestsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    chatGroups?: boolean | UserCountOutputTypeCountChatGroupsArgs
    Invitations?: boolean | UserCountOutputTypeCountInvitationsArgs
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
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoodIdeasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goodIdeaWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBadIdeasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: badIdeaWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInterestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: interestWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupUserWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }



  /**
   * Count Type ChatGroupCountOutputType
   */

  export type ChatGroupCountOutputType = {
    members: number
    messages: number
    invitations: number
  }

  export type ChatGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ChatGroupCountOutputTypeCountMembersArgs
    messages?: boolean | ChatGroupCountOutputTypeCountMessagesArgs
    invitations?: boolean | ChatGroupCountOutputTypeCountInvitationsArgs
  }

  // Custom InputTypes

  /**
   * ChatGroupCountOutputType without action
   */
  export type ChatGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupCountOutputType
     */
    select?: ChatGroupCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ChatGroupCountOutputType without action
   */
  export type ChatGroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupUserWhereInput
  }


  /**
   * ChatGroupCountOutputType without action
   */
  export type ChatGroupCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }


  /**
   * ChatGroupCountOutputType without action
   */
  export type ChatGroupCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    body: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    body: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    body: number
    userId: number
    programmingLanguages: number
    domains: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    userId?: true
    programmingLanguages?: true
    domains?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    body: string
    userId: string
    programmingLanguages: string[]
    domains: string[]
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    userId?: boolean
    programmingLanguages?: boolean
    domains?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    interests?: boolean | Post$interestsArgs<ExtArgs>
    goodIdeas?: boolean | Post$goodIdeasArgs<ExtArgs>
    badIdeas?: boolean | Post$badIdeasArgs<ExtArgs>
    chatGroup?: boolean | Post$chatGroupArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    body?: boolean
    userId?: boolean
    programmingLanguages?: boolean
    domains?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    interests?: boolean | Post$interestsArgs<ExtArgs>
    goodIdeas?: boolean | Post$goodIdeasArgs<ExtArgs>
    badIdeas?: boolean | Post$badIdeasArgs<ExtArgs>
    chatGroup?: boolean | Post$chatGroupArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      interests: Prisma.$interestPayload<ExtArgs>[]
      goodIdeas: Prisma.$goodIdeaPayload<ExtArgs>[]
      badIdeas: Prisma.$badIdeaPayload<ExtArgs>[]
      chatGroup: Prisma.$ChatGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      body: string
      userId: string
      programmingLanguages: string[]
      domains: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }


  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * @param {PostFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const post = await prisma.post.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PostFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Post.
     * @param {PostAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const post = await prisma.post.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PostAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    interests<T extends Post$interestsArgs<ExtArgs> = {}>(args?: Subset<T, Post$interestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, 'findMany'> | Null>;

    goodIdeas<T extends Post$goodIdeasArgs<ExtArgs> = {}>(args?: Subset<T, Post$goodIdeasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goodIdeaPayload<ExtArgs>, T, 'findMany'> | Null>;

    badIdeas<T extends Post$badIdeasArgs<ExtArgs> = {}>(args?: Subset<T, Post$badIdeasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$badIdeaPayload<ExtArgs>, T, 'findMany'> | Null>;

    chatGroup<T extends Post$chatGroupArgs<ExtArgs> = {}>(args?: Subset<T, Post$chatGroupArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly body: FieldRef<"Post", 'String'>
    readonly userId: FieldRef<"Post", 'String'>
    readonly programmingLanguages: FieldRef<"Post", 'String[]'>
    readonly domains: FieldRef<"Post", 'String[]'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
  }


  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }


  /**
   * Post findRaw
   */
  export type PostFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Post aggregateRaw
   */
  export type PostAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Post.interests
   */
  export type Post$interestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interestInclude<ExtArgs> | null
    where?: interestWhereInput
    orderBy?: interestOrderByWithRelationInput | interestOrderByWithRelationInput[]
    cursor?: interestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }


  /**
   * Post.goodIdeas
   */
  export type Post$goodIdeasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goodIdea
     */
    select?: goodIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodIdeaInclude<ExtArgs> | null
    where?: goodIdeaWhereInput
    orderBy?: goodIdeaOrderByWithRelationInput | goodIdeaOrderByWithRelationInput[]
    cursor?: goodIdeaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoodIdeaScalarFieldEnum | GoodIdeaScalarFieldEnum[]
  }


  /**
   * Post.badIdeas
   */
  export type Post$badIdeasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badIdea
     */
    select?: badIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: badIdeaInclude<ExtArgs> | null
    where?: badIdeaWhereInput
    orderBy?: badIdeaOrderByWithRelationInput | badIdeaOrderByWithRelationInput[]
    cursor?: badIdeaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BadIdeaScalarFieldEnum | BadIdeaScalarFieldEnum[]
  }


  /**
   * Post.chatGroup
   */
  export type Post$chatGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    where?: ChatGroupWhereInput
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    cursor?: ChatGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }


  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
  }



  /**
   * Model goodIdea
   */

  export type AggregateGoodIdea = {
    _count: GoodIdeaCountAggregateOutputType | null
    _min: GoodIdeaMinAggregateOutputType | null
    _max: GoodIdeaMaxAggregateOutputType | null
  }

  export type GoodIdeaMinAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoodIdeaMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoodIdeaCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoodIdeaMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoodIdeaMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoodIdeaCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoodIdeaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goodIdea to aggregate.
     */
    where?: goodIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goodIdeas to fetch.
     */
    orderBy?: goodIdeaOrderByWithRelationInput | goodIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: goodIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goodIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goodIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned goodIdeas
    **/
    _count?: true | GoodIdeaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoodIdeaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoodIdeaMaxAggregateInputType
  }

  export type GetGoodIdeaAggregateType<T extends GoodIdeaAggregateArgs> = {
        [P in keyof T & keyof AggregateGoodIdea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoodIdea[P]>
      : GetScalarType<T[P], AggregateGoodIdea[P]>
  }




  export type goodIdeaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goodIdeaWhereInput
    orderBy?: goodIdeaOrderByWithAggregationInput | goodIdeaOrderByWithAggregationInput[]
    by: GoodIdeaScalarFieldEnum[] | GoodIdeaScalarFieldEnum
    having?: goodIdeaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoodIdeaCountAggregateInputType | true
    _min?: GoodIdeaMinAggregateInputType
    _max?: GoodIdeaMaxAggregateInputType
  }

  export type GoodIdeaGroupByOutputType = {
    id: string
    postId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: GoodIdeaCountAggregateOutputType | null
    _min: GoodIdeaMinAggregateOutputType | null
    _max: GoodIdeaMaxAggregateOutputType | null
  }

  type GetGoodIdeaGroupByPayload<T extends goodIdeaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoodIdeaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoodIdeaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoodIdeaGroupByOutputType[P]>
            : GetScalarType<T[P], GoodIdeaGroupByOutputType[P]>
        }
      >
    >


  export type goodIdeaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goodIdea"]>

  export type goodIdeaSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type goodIdeaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $goodIdeaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "goodIdea"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["goodIdea"]>
    composites: {}
  }


  type goodIdeaGetPayload<S extends boolean | null | undefined | goodIdeaDefaultArgs> = $Result.GetResult<Prisma.$goodIdeaPayload, S>

  type goodIdeaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<goodIdeaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GoodIdeaCountAggregateInputType | true
    }

  export interface goodIdeaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['goodIdea'], meta: { name: 'goodIdea' } }
    /**
     * Find zero or one GoodIdea that matches the filter.
     * @param {goodIdeaFindUniqueArgs} args - Arguments to find a GoodIdea
     * @example
     * // Get one GoodIdea
     * const goodIdea = await prisma.goodIdea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends goodIdeaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, goodIdeaFindUniqueArgs<ExtArgs>>
    ): Prisma__goodIdeaClient<$Result.GetResult<Prisma.$goodIdeaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GoodIdea that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {goodIdeaFindUniqueOrThrowArgs} args - Arguments to find a GoodIdea
     * @example
     * // Get one GoodIdea
     * const goodIdea = await prisma.goodIdea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends goodIdeaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, goodIdeaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__goodIdeaClient<$Result.GetResult<Prisma.$goodIdeaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GoodIdea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goodIdeaFindFirstArgs} args - Arguments to find a GoodIdea
     * @example
     * // Get one GoodIdea
     * const goodIdea = await prisma.goodIdea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends goodIdeaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, goodIdeaFindFirstArgs<ExtArgs>>
    ): Prisma__goodIdeaClient<$Result.GetResult<Prisma.$goodIdeaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GoodIdea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goodIdeaFindFirstOrThrowArgs} args - Arguments to find a GoodIdea
     * @example
     * // Get one GoodIdea
     * const goodIdea = await prisma.goodIdea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends goodIdeaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, goodIdeaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__goodIdeaClient<$Result.GetResult<Prisma.$goodIdeaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GoodIdeas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goodIdeaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoodIdeas
     * const goodIdeas = await prisma.goodIdea.findMany()
     * 
     * // Get first 10 GoodIdeas
     * const goodIdeas = await prisma.goodIdea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goodIdeaWithIdOnly = await prisma.goodIdea.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends goodIdeaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, goodIdeaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goodIdeaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GoodIdea.
     * @param {goodIdeaCreateArgs} args - Arguments to create a GoodIdea.
     * @example
     * // Create one GoodIdea
     * const GoodIdea = await prisma.goodIdea.create({
     *   data: {
     *     // ... data to create a GoodIdea
     *   }
     * })
     * 
    **/
    create<T extends goodIdeaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, goodIdeaCreateArgs<ExtArgs>>
    ): Prisma__goodIdeaClient<$Result.GetResult<Prisma.$goodIdeaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GoodIdeas.
     *     @param {goodIdeaCreateManyArgs} args - Arguments to create many GoodIdeas.
     *     @example
     *     // Create many GoodIdeas
     *     const goodIdea = await prisma.goodIdea.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends goodIdeaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, goodIdeaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GoodIdea.
     * @param {goodIdeaDeleteArgs} args - Arguments to delete one GoodIdea.
     * @example
     * // Delete one GoodIdea
     * const GoodIdea = await prisma.goodIdea.delete({
     *   where: {
     *     // ... filter to delete one GoodIdea
     *   }
     * })
     * 
    **/
    delete<T extends goodIdeaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, goodIdeaDeleteArgs<ExtArgs>>
    ): Prisma__goodIdeaClient<$Result.GetResult<Prisma.$goodIdeaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GoodIdea.
     * @param {goodIdeaUpdateArgs} args - Arguments to update one GoodIdea.
     * @example
     * // Update one GoodIdea
     * const goodIdea = await prisma.goodIdea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends goodIdeaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, goodIdeaUpdateArgs<ExtArgs>>
    ): Prisma__goodIdeaClient<$Result.GetResult<Prisma.$goodIdeaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GoodIdeas.
     * @param {goodIdeaDeleteManyArgs} args - Arguments to filter GoodIdeas to delete.
     * @example
     * // Delete a few GoodIdeas
     * const { count } = await prisma.goodIdea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends goodIdeaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, goodIdeaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoodIdeas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goodIdeaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoodIdeas
     * const goodIdea = await prisma.goodIdea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends goodIdeaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, goodIdeaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GoodIdea.
     * @param {goodIdeaUpsertArgs} args - Arguments to update or create a GoodIdea.
     * @example
     * // Update or create a GoodIdea
     * const goodIdea = await prisma.goodIdea.upsert({
     *   create: {
     *     // ... data to create a GoodIdea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoodIdea we want to update
     *   }
     * })
    **/
    upsert<T extends goodIdeaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, goodIdeaUpsertArgs<ExtArgs>>
    ): Prisma__goodIdeaClient<$Result.GetResult<Prisma.$goodIdeaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more GoodIdeas that matches the filter.
     * @param {goodIdeaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const goodIdea = await prisma.goodIdea.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: goodIdeaFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a GoodIdea.
     * @param {goodIdeaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const goodIdea = await prisma.goodIdea.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: goodIdeaAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of GoodIdeas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goodIdeaCountArgs} args - Arguments to filter GoodIdeas to count.
     * @example
     * // Count the number of GoodIdeas
     * const count = await prisma.goodIdea.count({
     *   where: {
     *     // ... the filter for the GoodIdeas we want to count
     *   }
     * })
    **/
    count<T extends goodIdeaCountArgs>(
      args?: Subset<T, goodIdeaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoodIdeaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoodIdea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoodIdeaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoodIdeaAggregateArgs>(args: Subset<T, GoodIdeaAggregateArgs>): Prisma.PrismaPromise<GetGoodIdeaAggregateType<T>>

    /**
     * Group by GoodIdea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goodIdeaGroupByArgs} args - Group by arguments.
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
      T extends goodIdeaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: goodIdeaGroupByArgs['orderBy'] }
        : { orderBy?: goodIdeaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, goodIdeaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoodIdeaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the goodIdea model
   */
  readonly fields: goodIdeaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for goodIdea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__goodIdeaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the goodIdea model
   */ 
  interface goodIdeaFieldRefs {
    readonly id: FieldRef<"goodIdea", 'String'>
    readonly postId: FieldRef<"goodIdea", 'String'>
    readonly userId: FieldRef<"goodIdea", 'String'>
    readonly createdAt: FieldRef<"goodIdea", 'DateTime'>
    readonly updatedAt: FieldRef<"goodIdea", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * goodIdea findUnique
   */
  export type goodIdeaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goodIdea
     */
    select?: goodIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodIdeaInclude<ExtArgs> | null
    /**
     * Filter, which goodIdea to fetch.
     */
    where: goodIdeaWhereUniqueInput
  }


  /**
   * goodIdea findUniqueOrThrow
   */
  export type goodIdeaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goodIdea
     */
    select?: goodIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodIdeaInclude<ExtArgs> | null
    /**
     * Filter, which goodIdea to fetch.
     */
    where: goodIdeaWhereUniqueInput
  }


  /**
   * goodIdea findFirst
   */
  export type goodIdeaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goodIdea
     */
    select?: goodIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodIdeaInclude<ExtArgs> | null
    /**
     * Filter, which goodIdea to fetch.
     */
    where?: goodIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goodIdeas to fetch.
     */
    orderBy?: goodIdeaOrderByWithRelationInput | goodIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goodIdeas.
     */
    cursor?: goodIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goodIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goodIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goodIdeas.
     */
    distinct?: GoodIdeaScalarFieldEnum | GoodIdeaScalarFieldEnum[]
  }


  /**
   * goodIdea findFirstOrThrow
   */
  export type goodIdeaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goodIdea
     */
    select?: goodIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodIdeaInclude<ExtArgs> | null
    /**
     * Filter, which goodIdea to fetch.
     */
    where?: goodIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goodIdeas to fetch.
     */
    orderBy?: goodIdeaOrderByWithRelationInput | goodIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for goodIdeas.
     */
    cursor?: goodIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goodIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goodIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of goodIdeas.
     */
    distinct?: GoodIdeaScalarFieldEnum | GoodIdeaScalarFieldEnum[]
  }


  /**
   * goodIdea findMany
   */
  export type goodIdeaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goodIdea
     */
    select?: goodIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodIdeaInclude<ExtArgs> | null
    /**
     * Filter, which goodIdeas to fetch.
     */
    where?: goodIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of goodIdeas to fetch.
     */
    orderBy?: goodIdeaOrderByWithRelationInput | goodIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing goodIdeas.
     */
    cursor?: goodIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` goodIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` goodIdeas.
     */
    skip?: number
    distinct?: GoodIdeaScalarFieldEnum | GoodIdeaScalarFieldEnum[]
  }


  /**
   * goodIdea create
   */
  export type goodIdeaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goodIdea
     */
    select?: goodIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodIdeaInclude<ExtArgs> | null
    /**
     * The data needed to create a goodIdea.
     */
    data: XOR<goodIdeaCreateInput, goodIdeaUncheckedCreateInput>
  }


  /**
   * goodIdea createMany
   */
  export type goodIdeaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many goodIdeas.
     */
    data: goodIdeaCreateManyInput | goodIdeaCreateManyInput[]
  }


  /**
   * goodIdea update
   */
  export type goodIdeaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goodIdea
     */
    select?: goodIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodIdeaInclude<ExtArgs> | null
    /**
     * The data needed to update a goodIdea.
     */
    data: XOR<goodIdeaUpdateInput, goodIdeaUncheckedUpdateInput>
    /**
     * Choose, which goodIdea to update.
     */
    where: goodIdeaWhereUniqueInput
  }


  /**
   * goodIdea updateMany
   */
  export type goodIdeaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update goodIdeas.
     */
    data: XOR<goodIdeaUpdateManyMutationInput, goodIdeaUncheckedUpdateManyInput>
    /**
     * Filter which goodIdeas to update
     */
    where?: goodIdeaWhereInput
  }


  /**
   * goodIdea upsert
   */
  export type goodIdeaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goodIdea
     */
    select?: goodIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodIdeaInclude<ExtArgs> | null
    /**
     * The filter to search for the goodIdea to update in case it exists.
     */
    where: goodIdeaWhereUniqueInput
    /**
     * In case the goodIdea found by the `where` argument doesn't exist, create a new goodIdea with this data.
     */
    create: XOR<goodIdeaCreateInput, goodIdeaUncheckedCreateInput>
    /**
     * In case the goodIdea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<goodIdeaUpdateInput, goodIdeaUncheckedUpdateInput>
  }


  /**
   * goodIdea delete
   */
  export type goodIdeaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goodIdea
     */
    select?: goodIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodIdeaInclude<ExtArgs> | null
    /**
     * Filter which goodIdea to delete.
     */
    where: goodIdeaWhereUniqueInput
  }


  /**
   * goodIdea deleteMany
   */
  export type goodIdeaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goodIdeas to delete
     */
    where?: goodIdeaWhereInput
  }


  /**
   * goodIdea findRaw
   */
  export type goodIdeaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * goodIdea aggregateRaw
   */
  export type goodIdeaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * goodIdea without action
   */
  export type goodIdeaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goodIdea
     */
    select?: goodIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodIdeaInclude<ExtArgs> | null
  }



  /**
   * Model badIdea
   */

  export type AggregateBadIdea = {
    _count: BadIdeaCountAggregateOutputType | null
    _min: BadIdeaMinAggregateOutputType | null
    _max: BadIdeaMaxAggregateOutputType | null
  }

  export type BadIdeaMinAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BadIdeaMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BadIdeaCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BadIdeaMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BadIdeaMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BadIdeaCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BadIdeaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which badIdea to aggregate.
     */
    where?: badIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of badIdeas to fetch.
     */
    orderBy?: badIdeaOrderByWithRelationInput | badIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: badIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` badIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` badIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned badIdeas
    **/
    _count?: true | BadIdeaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadIdeaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadIdeaMaxAggregateInputType
  }

  export type GetBadIdeaAggregateType<T extends BadIdeaAggregateArgs> = {
        [P in keyof T & keyof AggregateBadIdea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadIdea[P]>
      : GetScalarType<T[P], AggregateBadIdea[P]>
  }




  export type badIdeaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: badIdeaWhereInput
    orderBy?: badIdeaOrderByWithAggregationInput | badIdeaOrderByWithAggregationInput[]
    by: BadIdeaScalarFieldEnum[] | BadIdeaScalarFieldEnum
    having?: badIdeaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadIdeaCountAggregateInputType | true
    _min?: BadIdeaMinAggregateInputType
    _max?: BadIdeaMaxAggregateInputType
  }

  export type BadIdeaGroupByOutputType = {
    id: string
    postId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: BadIdeaCountAggregateOutputType | null
    _min: BadIdeaMinAggregateOutputType | null
    _max: BadIdeaMaxAggregateOutputType | null
  }

  type GetBadIdeaGroupByPayload<T extends badIdeaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadIdeaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadIdeaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadIdeaGroupByOutputType[P]>
            : GetScalarType<T[P], BadIdeaGroupByOutputType[P]>
        }
      >
    >


  export type badIdeaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["badIdea"]>

  export type badIdeaSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type badIdeaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $badIdeaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "badIdea"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["badIdea"]>
    composites: {}
  }


  type badIdeaGetPayload<S extends boolean | null | undefined | badIdeaDefaultArgs> = $Result.GetResult<Prisma.$badIdeaPayload, S>

  type badIdeaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<badIdeaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BadIdeaCountAggregateInputType | true
    }

  export interface badIdeaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['badIdea'], meta: { name: 'badIdea' } }
    /**
     * Find zero or one BadIdea that matches the filter.
     * @param {badIdeaFindUniqueArgs} args - Arguments to find a BadIdea
     * @example
     * // Get one BadIdea
     * const badIdea = await prisma.badIdea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends badIdeaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, badIdeaFindUniqueArgs<ExtArgs>>
    ): Prisma__badIdeaClient<$Result.GetResult<Prisma.$badIdeaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BadIdea that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {badIdeaFindUniqueOrThrowArgs} args - Arguments to find a BadIdea
     * @example
     * // Get one BadIdea
     * const badIdea = await prisma.badIdea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends badIdeaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, badIdeaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__badIdeaClient<$Result.GetResult<Prisma.$badIdeaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BadIdea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {badIdeaFindFirstArgs} args - Arguments to find a BadIdea
     * @example
     * // Get one BadIdea
     * const badIdea = await prisma.badIdea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends badIdeaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, badIdeaFindFirstArgs<ExtArgs>>
    ): Prisma__badIdeaClient<$Result.GetResult<Prisma.$badIdeaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BadIdea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {badIdeaFindFirstOrThrowArgs} args - Arguments to find a BadIdea
     * @example
     * // Get one BadIdea
     * const badIdea = await prisma.badIdea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends badIdeaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, badIdeaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__badIdeaClient<$Result.GetResult<Prisma.$badIdeaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BadIdeas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {badIdeaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BadIdeas
     * const badIdeas = await prisma.badIdea.findMany()
     * 
     * // Get first 10 BadIdeas
     * const badIdeas = await prisma.badIdea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badIdeaWithIdOnly = await prisma.badIdea.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends badIdeaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, badIdeaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$badIdeaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BadIdea.
     * @param {badIdeaCreateArgs} args - Arguments to create a BadIdea.
     * @example
     * // Create one BadIdea
     * const BadIdea = await prisma.badIdea.create({
     *   data: {
     *     // ... data to create a BadIdea
     *   }
     * })
     * 
    **/
    create<T extends badIdeaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, badIdeaCreateArgs<ExtArgs>>
    ): Prisma__badIdeaClient<$Result.GetResult<Prisma.$badIdeaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BadIdeas.
     *     @param {badIdeaCreateManyArgs} args - Arguments to create many BadIdeas.
     *     @example
     *     // Create many BadIdeas
     *     const badIdea = await prisma.badIdea.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends badIdeaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, badIdeaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BadIdea.
     * @param {badIdeaDeleteArgs} args - Arguments to delete one BadIdea.
     * @example
     * // Delete one BadIdea
     * const BadIdea = await prisma.badIdea.delete({
     *   where: {
     *     // ... filter to delete one BadIdea
     *   }
     * })
     * 
    **/
    delete<T extends badIdeaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, badIdeaDeleteArgs<ExtArgs>>
    ): Prisma__badIdeaClient<$Result.GetResult<Prisma.$badIdeaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BadIdea.
     * @param {badIdeaUpdateArgs} args - Arguments to update one BadIdea.
     * @example
     * // Update one BadIdea
     * const badIdea = await prisma.badIdea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends badIdeaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, badIdeaUpdateArgs<ExtArgs>>
    ): Prisma__badIdeaClient<$Result.GetResult<Prisma.$badIdeaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BadIdeas.
     * @param {badIdeaDeleteManyArgs} args - Arguments to filter BadIdeas to delete.
     * @example
     * // Delete a few BadIdeas
     * const { count } = await prisma.badIdea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends badIdeaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, badIdeaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BadIdeas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {badIdeaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BadIdeas
     * const badIdea = await prisma.badIdea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends badIdeaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, badIdeaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BadIdea.
     * @param {badIdeaUpsertArgs} args - Arguments to update or create a BadIdea.
     * @example
     * // Update or create a BadIdea
     * const badIdea = await prisma.badIdea.upsert({
     *   create: {
     *     // ... data to create a BadIdea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BadIdea we want to update
     *   }
     * })
    **/
    upsert<T extends badIdeaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, badIdeaUpsertArgs<ExtArgs>>
    ): Prisma__badIdeaClient<$Result.GetResult<Prisma.$badIdeaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more BadIdeas that matches the filter.
     * @param {badIdeaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const badIdea = await prisma.badIdea.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: badIdeaFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a BadIdea.
     * @param {badIdeaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const badIdea = await prisma.badIdea.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: badIdeaAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of BadIdeas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {badIdeaCountArgs} args - Arguments to filter BadIdeas to count.
     * @example
     * // Count the number of BadIdeas
     * const count = await prisma.badIdea.count({
     *   where: {
     *     // ... the filter for the BadIdeas we want to count
     *   }
     * })
    **/
    count<T extends badIdeaCountArgs>(
      args?: Subset<T, badIdeaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadIdeaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BadIdea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadIdeaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BadIdeaAggregateArgs>(args: Subset<T, BadIdeaAggregateArgs>): Prisma.PrismaPromise<GetBadIdeaAggregateType<T>>

    /**
     * Group by BadIdea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {badIdeaGroupByArgs} args - Group by arguments.
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
      T extends badIdeaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: badIdeaGroupByArgs['orderBy'] }
        : { orderBy?: badIdeaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, badIdeaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadIdeaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the badIdea model
   */
  readonly fields: badIdeaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for badIdea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__badIdeaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the badIdea model
   */ 
  interface badIdeaFieldRefs {
    readonly id: FieldRef<"badIdea", 'String'>
    readonly postId: FieldRef<"badIdea", 'String'>
    readonly userId: FieldRef<"badIdea", 'String'>
    readonly createdAt: FieldRef<"badIdea", 'DateTime'>
    readonly updatedAt: FieldRef<"badIdea", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * badIdea findUnique
   */
  export type badIdeaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badIdea
     */
    select?: badIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: badIdeaInclude<ExtArgs> | null
    /**
     * Filter, which badIdea to fetch.
     */
    where: badIdeaWhereUniqueInput
  }


  /**
   * badIdea findUniqueOrThrow
   */
  export type badIdeaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badIdea
     */
    select?: badIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: badIdeaInclude<ExtArgs> | null
    /**
     * Filter, which badIdea to fetch.
     */
    where: badIdeaWhereUniqueInput
  }


  /**
   * badIdea findFirst
   */
  export type badIdeaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badIdea
     */
    select?: badIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: badIdeaInclude<ExtArgs> | null
    /**
     * Filter, which badIdea to fetch.
     */
    where?: badIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of badIdeas to fetch.
     */
    orderBy?: badIdeaOrderByWithRelationInput | badIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for badIdeas.
     */
    cursor?: badIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` badIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` badIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of badIdeas.
     */
    distinct?: BadIdeaScalarFieldEnum | BadIdeaScalarFieldEnum[]
  }


  /**
   * badIdea findFirstOrThrow
   */
  export type badIdeaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badIdea
     */
    select?: badIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: badIdeaInclude<ExtArgs> | null
    /**
     * Filter, which badIdea to fetch.
     */
    where?: badIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of badIdeas to fetch.
     */
    orderBy?: badIdeaOrderByWithRelationInput | badIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for badIdeas.
     */
    cursor?: badIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` badIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` badIdeas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of badIdeas.
     */
    distinct?: BadIdeaScalarFieldEnum | BadIdeaScalarFieldEnum[]
  }


  /**
   * badIdea findMany
   */
  export type badIdeaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badIdea
     */
    select?: badIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: badIdeaInclude<ExtArgs> | null
    /**
     * Filter, which badIdeas to fetch.
     */
    where?: badIdeaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of badIdeas to fetch.
     */
    orderBy?: badIdeaOrderByWithRelationInput | badIdeaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing badIdeas.
     */
    cursor?: badIdeaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` badIdeas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` badIdeas.
     */
    skip?: number
    distinct?: BadIdeaScalarFieldEnum | BadIdeaScalarFieldEnum[]
  }


  /**
   * badIdea create
   */
  export type badIdeaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badIdea
     */
    select?: badIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: badIdeaInclude<ExtArgs> | null
    /**
     * The data needed to create a badIdea.
     */
    data: XOR<badIdeaCreateInput, badIdeaUncheckedCreateInput>
  }


  /**
   * badIdea createMany
   */
  export type badIdeaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many badIdeas.
     */
    data: badIdeaCreateManyInput | badIdeaCreateManyInput[]
  }


  /**
   * badIdea update
   */
  export type badIdeaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badIdea
     */
    select?: badIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: badIdeaInclude<ExtArgs> | null
    /**
     * The data needed to update a badIdea.
     */
    data: XOR<badIdeaUpdateInput, badIdeaUncheckedUpdateInput>
    /**
     * Choose, which badIdea to update.
     */
    where: badIdeaWhereUniqueInput
  }


  /**
   * badIdea updateMany
   */
  export type badIdeaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update badIdeas.
     */
    data: XOR<badIdeaUpdateManyMutationInput, badIdeaUncheckedUpdateManyInput>
    /**
     * Filter which badIdeas to update
     */
    where?: badIdeaWhereInput
  }


  /**
   * badIdea upsert
   */
  export type badIdeaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badIdea
     */
    select?: badIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: badIdeaInclude<ExtArgs> | null
    /**
     * The filter to search for the badIdea to update in case it exists.
     */
    where: badIdeaWhereUniqueInput
    /**
     * In case the badIdea found by the `where` argument doesn't exist, create a new badIdea with this data.
     */
    create: XOR<badIdeaCreateInput, badIdeaUncheckedCreateInput>
    /**
     * In case the badIdea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<badIdeaUpdateInput, badIdeaUncheckedUpdateInput>
  }


  /**
   * badIdea delete
   */
  export type badIdeaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badIdea
     */
    select?: badIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: badIdeaInclude<ExtArgs> | null
    /**
     * Filter which badIdea to delete.
     */
    where: badIdeaWhereUniqueInput
  }


  /**
   * badIdea deleteMany
   */
  export type badIdeaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which badIdeas to delete
     */
    where?: badIdeaWhereInput
  }


  /**
   * badIdea findRaw
   */
  export type badIdeaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * badIdea aggregateRaw
   */
  export type badIdeaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * badIdea without action
   */
  export type badIdeaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badIdea
     */
    select?: badIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: badIdeaInclude<ExtArgs> | null
  }



  /**
   * Model interest
   */

  export type AggregateInterest = {
    _count: InterestCountAggregateOutputType | null
    _min: InterestMinAggregateOutputType | null
    _max: InterestMaxAggregateOutputType | null
  }

  export type InterestMinAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterestMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InterestCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InterestMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterestMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InterestCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InterestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which interest to aggregate.
     */
    where?: interestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interests to fetch.
     */
    orderBy?: interestOrderByWithRelationInput | interestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: interestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned interests
    **/
    _count?: true | InterestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InterestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InterestMaxAggregateInputType
  }

  export type GetInterestAggregateType<T extends InterestAggregateArgs> = {
        [P in keyof T & keyof AggregateInterest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInterest[P]>
      : GetScalarType<T[P], AggregateInterest[P]>
  }




  export type interestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: interestWhereInput
    orderBy?: interestOrderByWithAggregationInput | interestOrderByWithAggregationInput[]
    by: InterestScalarFieldEnum[] | InterestScalarFieldEnum
    having?: interestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InterestCountAggregateInputType | true
    _min?: InterestMinAggregateInputType
    _max?: InterestMaxAggregateInputType
  }

  export type InterestGroupByOutputType = {
    id: string
    postId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: InterestCountAggregateOutputType | null
    _min: InterestMinAggregateOutputType | null
    _max: InterestMaxAggregateOutputType | null
  }

  type GetInterestGroupByPayload<T extends interestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InterestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InterestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InterestGroupByOutputType[P]>
            : GetScalarType<T[P], InterestGroupByOutputType[P]>
        }
      >
    >


  export type interestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    invitation?: boolean | interest$invitationArgs<ExtArgs>
    _count?: boolean | InterestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["interest"]>

  export type interestSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type interestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    invitation?: boolean | interest$invitationArgs<ExtArgs>
    _count?: boolean | InterestCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $interestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "interest"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      invitation: Prisma.$InvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["interest"]>
    composites: {}
  }


  type interestGetPayload<S extends boolean | null | undefined | interestDefaultArgs> = $Result.GetResult<Prisma.$interestPayload, S>

  type interestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<interestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InterestCountAggregateInputType | true
    }

  export interface interestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['interest'], meta: { name: 'interest' } }
    /**
     * Find zero or one Interest that matches the filter.
     * @param {interestFindUniqueArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends interestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, interestFindUniqueArgs<ExtArgs>>
    ): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Interest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {interestFindUniqueOrThrowArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends interestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, interestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Interest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interestFindFirstArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends interestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, interestFindFirstArgs<ExtArgs>>
    ): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Interest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interestFindFirstOrThrowArgs} args - Arguments to find a Interest
     * @example
     * // Get one Interest
     * const interest = await prisma.interest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends interestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, interestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Interests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interests
     * const interests = await prisma.interest.findMany()
     * 
     * // Get first 10 Interests
     * const interests = await prisma.interest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const interestWithIdOnly = await prisma.interest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends interestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, interestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Interest.
     * @param {interestCreateArgs} args - Arguments to create a Interest.
     * @example
     * // Create one Interest
     * const Interest = await prisma.interest.create({
     *   data: {
     *     // ... data to create a Interest
     *   }
     * })
     * 
    **/
    create<T extends interestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, interestCreateArgs<ExtArgs>>
    ): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Interests.
     *     @param {interestCreateManyArgs} args - Arguments to create many Interests.
     *     @example
     *     // Create many Interests
     *     const interest = await prisma.interest.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends interestCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, interestCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Interest.
     * @param {interestDeleteArgs} args - Arguments to delete one Interest.
     * @example
     * // Delete one Interest
     * const Interest = await prisma.interest.delete({
     *   where: {
     *     // ... filter to delete one Interest
     *   }
     * })
     * 
    **/
    delete<T extends interestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, interestDeleteArgs<ExtArgs>>
    ): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Interest.
     * @param {interestUpdateArgs} args - Arguments to update one Interest.
     * @example
     * // Update one Interest
     * const interest = await prisma.interest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends interestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, interestUpdateArgs<ExtArgs>>
    ): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Interests.
     * @param {interestDeleteManyArgs} args - Arguments to filter Interests to delete.
     * @example
     * // Delete a few Interests
     * const { count } = await prisma.interest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends interestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, interestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interests
     * const interest = await prisma.interest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends interestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, interestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Interest.
     * @param {interestUpsertArgs} args - Arguments to update or create a Interest.
     * @example
     * // Update or create a Interest
     * const interest = await prisma.interest.upsert({
     *   create: {
     *     // ... data to create a Interest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interest we want to update
     *   }
     * })
    **/
    upsert<T extends interestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, interestUpsertArgs<ExtArgs>>
    ): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Interests that matches the filter.
     * @param {interestFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const interest = await prisma.interest.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: interestFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Interest.
     * @param {interestAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const interest = await prisma.interest.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: interestAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Interests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interestCountArgs} args - Arguments to filter Interests to count.
     * @example
     * // Count the number of Interests
     * const count = await prisma.interest.count({
     *   where: {
     *     // ... the filter for the Interests we want to count
     *   }
     * })
    **/
    count<T extends interestCountArgs>(
      args?: Subset<T, interestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InterestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Interest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InterestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InterestAggregateArgs>(args: Subset<T, InterestAggregateArgs>): Prisma.PrismaPromise<GetInterestAggregateType<T>>

    /**
     * Group by Interest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {interestGroupByArgs} args - Group by arguments.
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
      T extends interestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: interestGroupByArgs['orderBy'] }
        : { orderBy?: interestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, interestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInterestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the interest model
   */
  readonly fields: interestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for interest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__interestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    invitation<T extends interest$invitationArgs<ExtArgs> = {}>(args?: Subset<T, interest$invitationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the interest model
   */ 
  interface interestFieldRefs {
    readonly id: FieldRef<"interest", 'String'>
    readonly postId: FieldRef<"interest", 'String'>
    readonly userId: FieldRef<"interest", 'String'>
    readonly createdAt: FieldRef<"interest", 'DateTime'>
    readonly updatedAt: FieldRef<"interest", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * interest findUnique
   */
  export type interestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interestInclude<ExtArgs> | null
    /**
     * Filter, which interest to fetch.
     */
    where: interestWhereUniqueInput
  }


  /**
   * interest findUniqueOrThrow
   */
  export type interestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interestInclude<ExtArgs> | null
    /**
     * Filter, which interest to fetch.
     */
    where: interestWhereUniqueInput
  }


  /**
   * interest findFirst
   */
  export type interestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interestInclude<ExtArgs> | null
    /**
     * Filter, which interest to fetch.
     */
    where?: interestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interests to fetch.
     */
    orderBy?: interestOrderByWithRelationInput | interestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for interests.
     */
    cursor?: interestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of interests.
     */
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }


  /**
   * interest findFirstOrThrow
   */
  export type interestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interestInclude<ExtArgs> | null
    /**
     * Filter, which interest to fetch.
     */
    where?: interestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interests to fetch.
     */
    orderBy?: interestOrderByWithRelationInput | interestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for interests.
     */
    cursor?: interestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of interests.
     */
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }


  /**
   * interest findMany
   */
  export type interestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interestInclude<ExtArgs> | null
    /**
     * Filter, which interests to fetch.
     */
    where?: interestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of interests to fetch.
     */
    orderBy?: interestOrderByWithRelationInput | interestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing interests.
     */
    cursor?: interestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` interests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` interests.
     */
    skip?: number
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }


  /**
   * interest create
   */
  export type interestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interestInclude<ExtArgs> | null
    /**
     * The data needed to create a interest.
     */
    data: XOR<interestCreateInput, interestUncheckedCreateInput>
  }


  /**
   * interest createMany
   */
  export type interestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many interests.
     */
    data: interestCreateManyInput | interestCreateManyInput[]
  }


  /**
   * interest update
   */
  export type interestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interestInclude<ExtArgs> | null
    /**
     * The data needed to update a interest.
     */
    data: XOR<interestUpdateInput, interestUncheckedUpdateInput>
    /**
     * Choose, which interest to update.
     */
    where: interestWhereUniqueInput
  }


  /**
   * interest updateMany
   */
  export type interestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update interests.
     */
    data: XOR<interestUpdateManyMutationInput, interestUncheckedUpdateManyInput>
    /**
     * Filter which interests to update
     */
    where?: interestWhereInput
  }


  /**
   * interest upsert
   */
  export type interestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interestInclude<ExtArgs> | null
    /**
     * The filter to search for the interest to update in case it exists.
     */
    where: interestWhereUniqueInput
    /**
     * In case the interest found by the `where` argument doesn't exist, create a new interest with this data.
     */
    create: XOR<interestCreateInput, interestUncheckedCreateInput>
    /**
     * In case the interest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<interestUpdateInput, interestUncheckedUpdateInput>
  }


  /**
   * interest delete
   */
  export type interestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interestInclude<ExtArgs> | null
    /**
     * Filter which interest to delete.
     */
    where: interestWhereUniqueInput
  }


  /**
   * interest deleteMany
   */
  export type interestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which interests to delete
     */
    where?: interestWhereInput
  }


  /**
   * interest findRaw
   */
  export type interestFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * interest aggregateRaw
   */
  export type interestAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * interest.invitation
   */
  export type interest$invitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }


  /**
   * interest without action
   */
  export type interestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interestInclude<ExtArgs> | null
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
    email: string | null
    firstName: string | null
    secondName: string | null
    country: string | null
    educationExperience: string | null
    profilePicture: string | null
    biography: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    secondName: string | null
    country: string | null
    educationExperience: string | null
    profilePicture: string | null
    biography: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    secondName: number
    country: number
    educationExperience: number
    domains: number
    profilePicture: number
    programmingLanguages: number
    biography: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    secondName?: true
    country?: true
    educationExperience?: true
    profilePicture?: true
    biography?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    secondName?: true
    country?: true
    educationExperience?: true
    profilePicture?: true
    biography?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    secondName?: true
    country?: true
    educationExperience?: true
    domains?: true
    profilePicture?: true
    programmingLanguages?: true
    biography?: true
    createdAt?: true
    updatedAt?: true
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
    email: string
    firstName: string
    secondName: string | null
    country: string
    educationExperience: string
    domains: string[]
    profilePicture: string | null
    programmingLanguages: string[]
    biography: string | null
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    firstName?: boolean
    secondName?: boolean
    country?: boolean
    educationExperience?: boolean
    domains?: boolean
    profilePicture?: boolean
    programmingLanguages?: boolean
    biography?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    goodIdeas?: boolean | User$goodIdeasArgs<ExtArgs>
    badIdeas?: boolean | User$badIdeasArgs<ExtArgs>
    interests?: boolean | User$interestsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    chatGroups?: boolean | User$chatGroupsArgs<ExtArgs>
    Invitations?: boolean | User$InvitationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    firstName?: boolean
    secondName?: boolean
    country?: boolean
    educationExperience?: boolean
    domains?: boolean
    profilePicture?: boolean
    programmingLanguages?: boolean
    biography?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    goodIdeas?: boolean | User$goodIdeasArgs<ExtArgs>
    badIdeas?: boolean | User$badIdeasArgs<ExtArgs>
    interests?: boolean | User$interestsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    chatGroups?: boolean | User$chatGroupsArgs<ExtArgs>
    Invitations?: boolean | User$InvitationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      goodIdeas: Prisma.$goodIdeaPayload<ExtArgs>[]
      badIdeas: Prisma.$badIdeaPayload<ExtArgs>[]
      interests: Prisma.$interestPayload<ExtArgs>[]
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
      chatGroups: Prisma.$ChatGroupUserPayload<ExtArgs>[]
      Invitations: Prisma.$InvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      firstName: string
      secondName: string | null
      country: string
      educationExperience: string
      domains: string[]
      profilePicture: string | null
      programmingLanguages: string[]
      biography: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    goodIdeas<T extends User$goodIdeasArgs<ExtArgs> = {}>(args?: Subset<T, User$goodIdeasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goodIdeaPayload<ExtArgs>, T, 'findMany'> | Null>;

    badIdeas<T extends User$badIdeasArgs<ExtArgs> = {}>(args?: Subset<T, User$badIdeasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$badIdeaPayload<ExtArgs>, T, 'findMany'> | Null>;

    interests<T extends User$interestsArgs<ExtArgs> = {}>(args?: Subset<T, User$interestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, 'findMany'> | Null>;

    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    chatGroups<T extends User$chatGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$chatGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupUserPayload<ExtArgs>, T, 'findMany'> | Null>;

    Invitations<T extends User$InvitationsArgs<ExtArgs> = {}>(args?: Subset<T, User$InvitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly secondName: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
    readonly educationExperience: FieldRef<"User", 'String'>
    readonly domains: FieldRef<"User", 'String[]'>
    readonly profilePicture: FieldRef<"User", 'String'>
    readonly programmingLanguages: FieldRef<"User", 'String[]'>
    readonly biography: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * User.goodIdeas
   */
  export type User$goodIdeasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goodIdea
     */
    select?: goodIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goodIdeaInclude<ExtArgs> | null
    where?: goodIdeaWhereInput
    orderBy?: goodIdeaOrderByWithRelationInput | goodIdeaOrderByWithRelationInput[]
    cursor?: goodIdeaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoodIdeaScalarFieldEnum | GoodIdeaScalarFieldEnum[]
  }


  /**
   * User.badIdeas
   */
  export type User$badIdeasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the badIdea
     */
    select?: badIdeaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: badIdeaInclude<ExtArgs> | null
    where?: badIdeaWhereInput
    orderBy?: badIdeaOrderByWithRelationInput | badIdeaOrderByWithRelationInput[]
    cursor?: badIdeaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BadIdeaScalarFieldEnum | BadIdeaScalarFieldEnum[]
  }


  /**
   * User.interests
   */
  export type User$interestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the interest
     */
    select?: interestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: interestInclude<ExtArgs> | null
    where?: interestWhereInput
    orderBy?: interestOrderByWithRelationInput | interestOrderByWithRelationInput[]
    cursor?: interestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InterestScalarFieldEnum | InterestScalarFieldEnum[]
  }


  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }


  /**
   * User.chatGroups
   */
  export type User$chatGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupUser
     */
    select?: ChatGroupUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupUserInclude<ExtArgs> | null
    where?: ChatGroupUserWhereInput
    orderBy?: ChatGroupUserOrderByWithRelationInput | ChatGroupUserOrderByWithRelationInput[]
    cursor?: ChatGroupUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGroupUserScalarFieldEnum | ChatGroupUserScalarFieldEnum[]
  }


  /**
   * User.Invitations
   */
  export type User$InvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    senderId: string | null
    chatGroupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    senderId: string | null
    chatGroupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    content: number
    senderId: number
    chatGroupId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    chatGroupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    chatGroupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    content?: true
    senderId?: true
    chatGroupId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    content: string
    senderId: string
    chatGroupId: string
    createdAt: Date
    updatedAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    senderId?: boolean
    chatGroupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    content?: boolean
    senderId?: boolean
    chatGroupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }


  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      chatGroup: Prisma.$ChatGroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      senderId: string
      chatGroupId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }


  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatMessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChatMessage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatMessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatMessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
    **/
    create<T extends ChatMessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChatMessages.
     *     @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     *     @example
     *     // Create many ChatMessages
     *     const chatMessage = await prisma.chatMessage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatMessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
    **/
    delete<T extends ChatMessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatMessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatMessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatMessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
    **/
    upsert<T extends ChatMessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>
    ): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * @param {ChatMessageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const chatMessage = await prisma.chatMessage.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ChatMessageFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ChatMessage.
     * @param {ChatMessageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const chatMessage = await prisma.chatMessage.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ChatMessageAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    chatGroup<T extends ChatGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroupDefaultArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ChatMessage model
   */ 
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly senderId: FieldRef<"ChatMessage", 'String'>
    readonly chatGroupId: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }


  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }


  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }


  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }


  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }


  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }


  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
  }


  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }


  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
  }


  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }


  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }


  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
  }


  /**
   * ChatMessage findRaw
   */
  export type ChatMessageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ChatMessage aggregateRaw
   */
  export type ChatMessageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
  }



  /**
   * Model ChatGroup
   */

  export type AggregateChatGroup = {
    _count: ChatGroupCountAggregateOutputType | null
    _min: ChatGroupMinAggregateOutputType | null
    _max: ChatGroupMaxAggregateOutputType | null
  }

  export type ChatGroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    postId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGroupCountAggregateOutputType = {
    id: number
    name: number
    postId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatGroupMinAggregateInputType = {
    id?: true
    name?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGroupMaxAggregateInputType = {
    id?: true
    name?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGroupCountAggregateInputType = {
    id?: true
    name?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroup to aggregate.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatGroups
    **/
    _count?: true | ChatGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatGroupMaxAggregateInputType
  }

  export type GetChatGroupAggregateType<T extends ChatGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateChatGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatGroup[P]>
      : GetScalarType<T[P], AggregateChatGroup[P]>
  }




  export type ChatGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupWhereInput
    orderBy?: ChatGroupOrderByWithAggregationInput | ChatGroupOrderByWithAggregationInput[]
    by: ChatGroupScalarFieldEnum[] | ChatGroupScalarFieldEnum
    having?: ChatGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatGroupCountAggregateInputType | true
    _min?: ChatGroupMinAggregateInputType
    _max?: ChatGroupMaxAggregateInputType
  }

  export type ChatGroupGroupByOutputType = {
    id: string
    name: string
    postId: string
    createdAt: Date
    updatedAt: Date
    _count: ChatGroupCountAggregateOutputType | null
    _min: ChatGroupMinAggregateOutputType | null
    _max: ChatGroupMaxAggregateOutputType | null
  }

  type GetChatGroupGroupByPayload<T extends ChatGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupGroupByOutputType[P]>
        }
      >
    >


  export type ChatGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | ChatGroup$membersArgs<ExtArgs>
    messages?: boolean | ChatGroup$messagesArgs<ExtArgs>
    invitations?: boolean | ChatGroup$invitationsArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    _count?: boolean | ChatGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroup"]>

  export type ChatGroupSelectScalar = {
    id?: boolean
    name?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | ChatGroup$membersArgs<ExtArgs>
    messages?: boolean | ChatGroup$messagesArgs<ExtArgs>
    invitations?: boolean | ChatGroup$invitationsArgs<ExtArgs>
    post?: boolean | PostDefaultArgs<ExtArgs>
    _count?: boolean | ChatGroupCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ChatGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatGroup"
    objects: {
      members: Prisma.$ChatGroupUserPayload<ExtArgs>[]
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
      invitations: Prisma.$InvitationPayload<ExtArgs>[]
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      postId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatGroup"]>
    composites: {}
  }


  type ChatGroupGetPayload<S extends boolean | null | undefined | ChatGroupDefaultArgs> = $Result.GetResult<Prisma.$ChatGroupPayload, S>

  type ChatGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatGroupFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatGroupCountAggregateInputType | true
    }

  export interface ChatGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatGroup'], meta: { name: 'ChatGroup' } }
    /**
     * Find zero or one ChatGroup that matches the filter.
     * @param {ChatGroupFindUniqueArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatGroupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGroupFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChatGroup that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatGroupFindUniqueOrThrowArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatGroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChatGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindFirstArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatGroupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGroupFindFirstArgs<ExtArgs>>
    ): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChatGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindFirstOrThrowArgs} args - Arguments to find a ChatGroup
     * @example
     * // Get one ChatGroup
     * const chatGroup = await prisma.chatGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatGroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChatGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatGroups
     * const chatGroups = await prisma.chatGroup.findMany()
     * 
     * // Get first 10 ChatGroups
     * const chatGroups = await prisma.chatGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatGroupWithIdOnly = await prisma.chatGroup.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatGroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChatGroup.
     * @param {ChatGroupCreateArgs} args - Arguments to create a ChatGroup.
     * @example
     * // Create one ChatGroup
     * const ChatGroup = await prisma.chatGroup.create({
     *   data: {
     *     // ... data to create a ChatGroup
     *   }
     * })
     * 
    **/
    create<T extends ChatGroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGroupCreateArgs<ExtArgs>>
    ): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChatGroups.
     *     @param {ChatGroupCreateManyArgs} args - Arguments to create many ChatGroups.
     *     @example
     *     // Create many ChatGroups
     *     const chatGroup = await prisma.chatGroup.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatGroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatGroup.
     * @param {ChatGroupDeleteArgs} args - Arguments to delete one ChatGroup.
     * @example
     * // Delete one ChatGroup
     * const ChatGroup = await prisma.chatGroup.delete({
     *   where: {
     *     // ... filter to delete one ChatGroup
     *   }
     * })
     * 
    **/
    delete<T extends ChatGroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGroupDeleteArgs<ExtArgs>>
    ): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChatGroup.
     * @param {ChatGroupUpdateArgs} args - Arguments to update one ChatGroup.
     * @example
     * // Update one ChatGroup
     * const chatGroup = await prisma.chatGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatGroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGroupUpdateArgs<ExtArgs>>
    ): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChatGroups.
     * @param {ChatGroupDeleteManyArgs} args - Arguments to filter ChatGroups to delete.
     * @example
     * // Delete a few ChatGroups
     * const { count } = await prisma.chatGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatGroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatGroups
     * const chatGroup = await prisma.chatGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatGroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatGroup.
     * @param {ChatGroupUpsertArgs} args - Arguments to update or create a ChatGroup.
     * @example
     * // Update or create a ChatGroup
     * const chatGroup = await prisma.chatGroup.upsert({
     *   create: {
     *     // ... data to create a ChatGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatGroup we want to update
     *   }
     * })
    **/
    upsert<T extends ChatGroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGroupUpsertArgs<ExtArgs>>
    ): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more ChatGroups that matches the filter.
     * @param {ChatGroupFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const chatGroup = await prisma.chatGroup.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ChatGroupFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ChatGroup.
     * @param {ChatGroupAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const chatGroup = await prisma.chatGroup.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ChatGroupAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ChatGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupCountArgs} args - Arguments to filter ChatGroups to count.
     * @example
     * // Count the number of ChatGroups
     * const count = await prisma.chatGroup.count({
     *   where: {
     *     // ... the filter for the ChatGroups we want to count
     *   }
     * })
    **/
    count<T extends ChatGroupCountArgs>(
      args?: Subset<T, ChatGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatGroupAggregateArgs>(args: Subset<T, ChatGroupAggregateArgs>): Prisma.PrismaPromise<GetChatGroupAggregateType<T>>

    /**
     * Group by ChatGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatGroup model
   */
  readonly fields: ChatGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    members<T extends ChatGroup$membersArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroup$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupUserPayload<ExtArgs>, T, 'findMany'> | Null>;

    messages<T extends ChatGroup$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroup$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    invitations<T extends ChatGroup$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroup$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'findMany'> | Null>;

    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ChatGroup model
   */ 
  interface ChatGroupFieldRefs {
    readonly id: FieldRef<"ChatGroup", 'String'>
    readonly name: FieldRef<"ChatGroup", 'String'>
    readonly postId: FieldRef<"ChatGroup", 'String'>
    readonly createdAt: FieldRef<"ChatGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatGroup", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ChatGroup findUnique
   */
  export type ChatGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where: ChatGroupWhereUniqueInput
  }


  /**
   * ChatGroup findUniqueOrThrow
   */
  export type ChatGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where: ChatGroupWhereUniqueInput
  }


  /**
   * ChatGroup findFirst
   */
  export type ChatGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }


  /**
   * ChatGroup findFirstOrThrow
   */
  export type ChatGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroup to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroups.
     */
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }


  /**
   * ChatGroup findMany
   */
  export type ChatGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroups to fetch.
     */
    where?: ChatGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroups to fetch.
     */
    orderBy?: ChatGroupOrderByWithRelationInput | ChatGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatGroups.
     */
    cursor?: ChatGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroups.
     */
    skip?: number
    distinct?: ChatGroupScalarFieldEnum | ChatGroupScalarFieldEnum[]
  }


  /**
   * ChatGroup create
   */
  export type ChatGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatGroup.
     */
    data: XOR<ChatGroupCreateInput, ChatGroupUncheckedCreateInput>
  }


  /**
   * ChatGroup createMany
   */
  export type ChatGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatGroups.
     */
    data: ChatGroupCreateManyInput | ChatGroupCreateManyInput[]
  }


  /**
   * ChatGroup update
   */
  export type ChatGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatGroup.
     */
    data: XOR<ChatGroupUpdateInput, ChatGroupUncheckedUpdateInput>
    /**
     * Choose, which ChatGroup to update.
     */
    where: ChatGroupWhereUniqueInput
  }


  /**
   * ChatGroup updateMany
   */
  export type ChatGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatGroups.
     */
    data: XOR<ChatGroupUpdateManyMutationInput, ChatGroupUncheckedUpdateManyInput>
    /**
     * Filter which ChatGroups to update
     */
    where?: ChatGroupWhereInput
  }


  /**
   * ChatGroup upsert
   */
  export type ChatGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatGroup to update in case it exists.
     */
    where: ChatGroupWhereUniqueInput
    /**
     * In case the ChatGroup found by the `where` argument doesn't exist, create a new ChatGroup with this data.
     */
    create: XOR<ChatGroupCreateInput, ChatGroupUncheckedCreateInput>
    /**
     * In case the ChatGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatGroupUpdateInput, ChatGroupUncheckedUpdateInput>
  }


  /**
   * ChatGroup delete
   */
  export type ChatGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
    /**
     * Filter which ChatGroup to delete.
     */
    where: ChatGroupWhereUniqueInput
  }


  /**
   * ChatGroup deleteMany
   */
  export type ChatGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroups to delete
     */
    where?: ChatGroupWhereInput
  }


  /**
   * ChatGroup findRaw
   */
  export type ChatGroupFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ChatGroup aggregateRaw
   */
  export type ChatGroupAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ChatGroup.members
   */
  export type ChatGroup$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupUser
     */
    select?: ChatGroupUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupUserInclude<ExtArgs> | null
    where?: ChatGroupUserWhereInput
    orderBy?: ChatGroupUserOrderByWithRelationInput | ChatGroupUserOrderByWithRelationInput[]
    cursor?: ChatGroupUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatGroupUserScalarFieldEnum | ChatGroupUserScalarFieldEnum[]
  }


  /**
   * ChatGroup.messages
   */
  export type ChatGroup$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }


  /**
   * ChatGroup.invitations
   */
  export type ChatGroup$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }


  /**
   * ChatGroup without action
   */
  export type ChatGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroup
     */
    select?: ChatGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupInclude<ExtArgs> | null
  }



  /**
   * Model ChatGroupUser
   */

  export type AggregateChatGroupUser = {
    _count: ChatGroupUserCountAggregateOutputType | null
    _min: ChatGroupUserMinAggregateOutputType | null
    _max: ChatGroupUserMaxAggregateOutputType | null
  }

  export type ChatGroupUserMinAggregateOutputType = {
    id: string | null
    userId: string | null
    chatGroupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGroupUserMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    chatGroupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGroupUserCountAggregateOutputType = {
    id: number
    userId: number
    chatGroupId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatGroupUserMinAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGroupUserMaxAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGroupUserCountAggregateInputType = {
    id?: true
    userId?: true
    chatGroupId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatGroupUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroupUser to aggregate.
     */
    where?: ChatGroupUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroupUsers to fetch.
     */
    orderBy?: ChatGroupUserOrderByWithRelationInput | ChatGroupUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatGroupUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroupUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroupUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatGroupUsers
    **/
    _count?: true | ChatGroupUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatGroupUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatGroupUserMaxAggregateInputType
  }

  export type GetChatGroupUserAggregateType<T extends ChatGroupUserAggregateArgs> = {
        [P in keyof T & keyof AggregateChatGroupUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatGroupUser[P]>
      : GetScalarType<T[P], AggregateChatGroupUser[P]>
  }




  export type ChatGroupUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatGroupUserWhereInput
    orderBy?: ChatGroupUserOrderByWithAggregationInput | ChatGroupUserOrderByWithAggregationInput[]
    by: ChatGroupUserScalarFieldEnum[] | ChatGroupUserScalarFieldEnum
    having?: ChatGroupUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatGroupUserCountAggregateInputType | true
    _min?: ChatGroupUserMinAggregateInputType
    _max?: ChatGroupUserMaxAggregateInputType
  }

  export type ChatGroupUserGroupByOutputType = {
    id: string
    userId: string
    chatGroupId: string
    createdAt: Date
    updatedAt: Date
    _count: ChatGroupUserCountAggregateOutputType | null
    _min: ChatGroupUserMinAggregateOutputType | null
    _max: ChatGroupUserMaxAggregateOutputType | null
  }

  type GetChatGroupUserGroupByPayload<T extends ChatGroupUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupUserGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupUserGroupByOutputType[P]>
        }
      >
    >


  export type ChatGroupUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    chatGroupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatGroupUser"]>

  export type ChatGroupUserSelectScalar = {
    id?: boolean
    userId?: boolean
    chatGroupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatGroupUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
  }


  export type $ChatGroupUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatGroupUser"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chatGroup: Prisma.$ChatGroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      chatGroupId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatGroupUser"]>
    composites: {}
  }


  type ChatGroupUserGetPayload<S extends boolean | null | undefined | ChatGroupUserDefaultArgs> = $Result.GetResult<Prisma.$ChatGroupUserPayload, S>

  type ChatGroupUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatGroupUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatGroupUserCountAggregateInputType | true
    }

  export interface ChatGroupUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatGroupUser'], meta: { name: 'ChatGroupUser' } }
    /**
     * Find zero or one ChatGroupUser that matches the filter.
     * @param {ChatGroupUserFindUniqueArgs} args - Arguments to find a ChatGroupUser
     * @example
     * // Get one ChatGroupUser
     * const chatGroupUser = await prisma.chatGroupUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatGroupUserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGroupUserFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatGroupUserClient<$Result.GetResult<Prisma.$ChatGroupUserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChatGroupUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatGroupUserFindUniqueOrThrowArgs} args - Arguments to find a ChatGroupUser
     * @example
     * // Get one ChatGroupUser
     * const chatGroupUser = await prisma.chatGroupUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatGroupUserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGroupUserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatGroupUserClient<$Result.GetResult<Prisma.$ChatGroupUserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChatGroupUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupUserFindFirstArgs} args - Arguments to find a ChatGroupUser
     * @example
     * // Get one ChatGroupUser
     * const chatGroupUser = await prisma.chatGroupUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatGroupUserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGroupUserFindFirstArgs<ExtArgs>>
    ): Prisma__ChatGroupUserClient<$Result.GetResult<Prisma.$ChatGroupUserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChatGroupUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupUserFindFirstOrThrowArgs} args - Arguments to find a ChatGroupUser
     * @example
     * // Get one ChatGroupUser
     * const chatGroupUser = await prisma.chatGroupUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatGroupUserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGroupUserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatGroupUserClient<$Result.GetResult<Prisma.$ChatGroupUserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChatGroupUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatGroupUsers
     * const chatGroupUsers = await prisma.chatGroupUser.findMany()
     * 
     * // Get first 10 ChatGroupUsers
     * const chatGroupUsers = await prisma.chatGroupUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatGroupUserWithIdOnly = await prisma.chatGroupUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatGroupUserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGroupUserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGroupUserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChatGroupUser.
     * @param {ChatGroupUserCreateArgs} args - Arguments to create a ChatGroupUser.
     * @example
     * // Create one ChatGroupUser
     * const ChatGroupUser = await prisma.chatGroupUser.create({
     *   data: {
     *     // ... data to create a ChatGroupUser
     *   }
     * })
     * 
    **/
    create<T extends ChatGroupUserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGroupUserCreateArgs<ExtArgs>>
    ): Prisma__ChatGroupUserClient<$Result.GetResult<Prisma.$ChatGroupUserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChatGroupUsers.
     *     @param {ChatGroupUserCreateManyArgs} args - Arguments to create many ChatGroupUsers.
     *     @example
     *     // Create many ChatGroupUsers
     *     const chatGroupUser = await prisma.chatGroupUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatGroupUserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGroupUserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatGroupUser.
     * @param {ChatGroupUserDeleteArgs} args - Arguments to delete one ChatGroupUser.
     * @example
     * // Delete one ChatGroupUser
     * const ChatGroupUser = await prisma.chatGroupUser.delete({
     *   where: {
     *     // ... filter to delete one ChatGroupUser
     *   }
     * })
     * 
    **/
    delete<T extends ChatGroupUserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGroupUserDeleteArgs<ExtArgs>>
    ): Prisma__ChatGroupUserClient<$Result.GetResult<Prisma.$ChatGroupUserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChatGroupUser.
     * @param {ChatGroupUserUpdateArgs} args - Arguments to update one ChatGroupUser.
     * @example
     * // Update one ChatGroupUser
     * const chatGroupUser = await prisma.chatGroupUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatGroupUserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGroupUserUpdateArgs<ExtArgs>>
    ): Prisma__ChatGroupUserClient<$Result.GetResult<Prisma.$ChatGroupUserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChatGroupUsers.
     * @param {ChatGroupUserDeleteManyArgs} args - Arguments to filter ChatGroupUsers to delete.
     * @example
     * // Delete a few ChatGroupUsers
     * const { count } = await prisma.chatGroupUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatGroupUserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGroupUserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGroupUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatGroupUsers
     * const chatGroupUser = await prisma.chatGroupUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatGroupUserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGroupUserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatGroupUser.
     * @param {ChatGroupUserUpsertArgs} args - Arguments to update or create a ChatGroupUser.
     * @example
     * // Update or create a ChatGroupUser
     * const chatGroupUser = await prisma.chatGroupUser.upsert({
     *   create: {
     *     // ... data to create a ChatGroupUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatGroupUser we want to update
     *   }
     * })
    **/
    upsert<T extends ChatGroupUserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGroupUserUpsertArgs<ExtArgs>>
    ): Prisma__ChatGroupUserClient<$Result.GetResult<Prisma.$ChatGroupUserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more ChatGroupUsers that matches the filter.
     * @param {ChatGroupUserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const chatGroupUser = await prisma.chatGroupUser.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ChatGroupUserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ChatGroupUser.
     * @param {ChatGroupUserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const chatGroupUser = await prisma.chatGroupUser.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ChatGroupUserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ChatGroupUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupUserCountArgs} args - Arguments to filter ChatGroupUsers to count.
     * @example
     * // Count the number of ChatGroupUsers
     * const count = await prisma.chatGroupUser.count({
     *   where: {
     *     // ... the filter for the ChatGroupUsers we want to count
     *   }
     * })
    **/
    count<T extends ChatGroupUserCountArgs>(
      args?: Subset<T, ChatGroupUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatGroupUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatGroupUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatGroupUserAggregateArgs>(args: Subset<T, ChatGroupUserAggregateArgs>): Prisma.PrismaPromise<GetChatGroupUserAggregateType<T>>

    /**
     * Group by ChatGroupUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupUserGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupUserGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatGroupUser model
   */
  readonly fields: ChatGroupUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatGroupUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatGroupUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    chatGroup<T extends ChatGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroupDefaultArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ChatGroupUser model
   */ 
  interface ChatGroupUserFieldRefs {
    readonly id: FieldRef<"ChatGroupUser", 'String'>
    readonly userId: FieldRef<"ChatGroupUser", 'String'>
    readonly chatGroupId: FieldRef<"ChatGroupUser", 'String'>
    readonly createdAt: FieldRef<"ChatGroupUser", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatGroupUser", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ChatGroupUser findUnique
   */
  export type ChatGroupUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupUser
     */
    select?: ChatGroupUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroupUser to fetch.
     */
    where: ChatGroupUserWhereUniqueInput
  }


  /**
   * ChatGroupUser findUniqueOrThrow
   */
  export type ChatGroupUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupUser
     */
    select?: ChatGroupUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroupUser to fetch.
     */
    where: ChatGroupUserWhereUniqueInput
  }


  /**
   * ChatGroupUser findFirst
   */
  export type ChatGroupUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupUser
     */
    select?: ChatGroupUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroupUser to fetch.
     */
    where?: ChatGroupUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroupUsers to fetch.
     */
    orderBy?: ChatGroupUserOrderByWithRelationInput | ChatGroupUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroupUsers.
     */
    cursor?: ChatGroupUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroupUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroupUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroupUsers.
     */
    distinct?: ChatGroupUserScalarFieldEnum | ChatGroupUserScalarFieldEnum[]
  }


  /**
   * ChatGroupUser findFirstOrThrow
   */
  export type ChatGroupUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupUser
     */
    select?: ChatGroupUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroupUser to fetch.
     */
    where?: ChatGroupUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroupUsers to fetch.
     */
    orderBy?: ChatGroupUserOrderByWithRelationInput | ChatGroupUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGroupUsers.
     */
    cursor?: ChatGroupUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroupUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroupUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGroupUsers.
     */
    distinct?: ChatGroupUserScalarFieldEnum | ChatGroupUserScalarFieldEnum[]
  }


  /**
   * ChatGroupUser findMany
   */
  export type ChatGroupUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupUser
     */
    select?: ChatGroupUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupUserInclude<ExtArgs> | null
    /**
     * Filter, which ChatGroupUsers to fetch.
     */
    where?: ChatGroupUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGroupUsers to fetch.
     */
    orderBy?: ChatGroupUserOrderByWithRelationInput | ChatGroupUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatGroupUsers.
     */
    cursor?: ChatGroupUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGroupUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGroupUsers.
     */
    skip?: number
    distinct?: ChatGroupUserScalarFieldEnum | ChatGroupUserScalarFieldEnum[]
  }


  /**
   * ChatGroupUser create
   */
  export type ChatGroupUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupUser
     */
    select?: ChatGroupUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupUserInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatGroupUser.
     */
    data: XOR<ChatGroupUserCreateInput, ChatGroupUserUncheckedCreateInput>
  }


  /**
   * ChatGroupUser createMany
   */
  export type ChatGroupUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatGroupUsers.
     */
    data: ChatGroupUserCreateManyInput | ChatGroupUserCreateManyInput[]
  }


  /**
   * ChatGroupUser update
   */
  export type ChatGroupUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupUser
     */
    select?: ChatGroupUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupUserInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatGroupUser.
     */
    data: XOR<ChatGroupUserUpdateInput, ChatGroupUserUncheckedUpdateInput>
    /**
     * Choose, which ChatGroupUser to update.
     */
    where: ChatGroupUserWhereUniqueInput
  }


  /**
   * ChatGroupUser updateMany
   */
  export type ChatGroupUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatGroupUsers.
     */
    data: XOR<ChatGroupUserUpdateManyMutationInput, ChatGroupUserUncheckedUpdateManyInput>
    /**
     * Filter which ChatGroupUsers to update
     */
    where?: ChatGroupUserWhereInput
  }


  /**
   * ChatGroupUser upsert
   */
  export type ChatGroupUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupUser
     */
    select?: ChatGroupUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupUserInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatGroupUser to update in case it exists.
     */
    where: ChatGroupUserWhereUniqueInput
    /**
     * In case the ChatGroupUser found by the `where` argument doesn't exist, create a new ChatGroupUser with this data.
     */
    create: XOR<ChatGroupUserCreateInput, ChatGroupUserUncheckedCreateInput>
    /**
     * In case the ChatGroupUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatGroupUserUpdateInput, ChatGroupUserUncheckedUpdateInput>
  }


  /**
   * ChatGroupUser delete
   */
  export type ChatGroupUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupUser
     */
    select?: ChatGroupUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupUserInclude<ExtArgs> | null
    /**
     * Filter which ChatGroupUser to delete.
     */
    where: ChatGroupUserWhereUniqueInput
  }


  /**
   * ChatGroupUser deleteMany
   */
  export type ChatGroupUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGroupUsers to delete
     */
    where?: ChatGroupUserWhereInput
  }


  /**
   * ChatGroupUser findRaw
   */
  export type ChatGroupUserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ChatGroupUser aggregateRaw
   */
  export type ChatGroupUserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ChatGroupUser without action
   */
  export type ChatGroupUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGroupUser
     */
    select?: ChatGroupUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChatGroupUserInclude<ExtArgs> | null
  }



  /**
   * Model Invitation
   */

  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  export type InvitationMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    chatGroupId: string | null
    interestId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitationMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    chatGroupId: string | null
    interestId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvitationCountAggregateOutputType = {
    id: number
    senderId: number
    chatGroupId: number
    interestId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvitationMinAggregateInputType = {
    id?: true
    senderId?: true
    chatGroupId?: true
    interestId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitationMaxAggregateInputType = {
    id?: true
    senderId?: true
    chatGroupId?: true
    interestId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvitationCountAggregateInputType = {
    id?: true
    senderId?: true
    chatGroupId?: true
    interestId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitation to aggregate.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invitations
    **/
    _count?: true | InvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationMaxAggregateInputType
  }

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>
  }




  export type InvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithAggregationInput | InvitationOrderByWithAggregationInput[]
    by: InvitationScalarFieldEnum[] | InvitationScalarFieldEnum
    having?: InvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationCountAggregateInputType | true
    _min?: InvitationMinAggregateInputType
    _max?: InvitationMaxAggregateInputType
  }

  export type InvitationGroupByOutputType = {
    id: string
    senderId: string
    chatGroupId: string
    interestId: string
    createdAt: Date
    updatedAt: Date
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>
        }
      >
    >


  export type InvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    chatGroupId?: boolean
    interestId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
    interest?: boolean | interestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectScalar = {
    id?: boolean
    senderId?: boolean
    chatGroupId?: boolean
    interestId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    chatGroup?: boolean | ChatGroupDefaultArgs<ExtArgs>
    interest?: boolean | interestDefaultArgs<ExtArgs>
  }


  export type $InvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invitation"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      chatGroup: Prisma.$ChatGroupPayload<ExtArgs>
      interest: Prisma.$interestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      chatGroupId: string
      interestId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invitation"]>
    composites: {}
  }


  type InvitationGetPayload<S extends boolean | null | undefined | InvitationDefaultArgs> = $Result.GetResult<Prisma.$InvitationPayload, S>

  type InvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InvitationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InvitationCountAggregateInputType | true
    }

  export interface InvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invitation'], meta: { name: 'Invitation' } }
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {InvitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InvitationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InvitationFindUniqueArgs<ExtArgs>>
    ): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Invitation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InvitationFindUniqueOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InvitationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InvitationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitationFindFirstArgs<ExtArgs>>
    ): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Invitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InvitationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InvitationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Invitation.
     * @param {InvitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     * 
    **/
    create<T extends InvitationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InvitationCreateArgs<ExtArgs>>
    ): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Invitations.
     *     @param {InvitationCreateManyArgs} args - Arguments to create many Invitations.
     *     @example
     *     // Create many Invitations
     *     const invitation = await prisma.invitation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InvitationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invitation.
     * @param {InvitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     * 
    **/
    delete<T extends InvitationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InvitationDeleteArgs<ExtArgs>>
    ): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Invitation.
     * @param {InvitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InvitationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InvitationUpdateArgs<ExtArgs>>
    ): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Invitations.
     * @param {InvitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InvitationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InvitationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InvitationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InvitationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invitation.
     * @param {InvitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
    **/
    upsert<T extends InvitationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InvitationUpsertArgs<ExtArgs>>
    ): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Invitations that matches the filter.
     * @param {InvitationFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const invitation = await prisma.invitation.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: InvitationFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Invitation.
     * @param {InvitationAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const invitation = await prisma.invitation.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: InvitationAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends InvitationCountArgs>(
      args?: Subset<T, InvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvitationAggregateArgs>(args: Subset<T, InvitationAggregateArgs>): Prisma.PrismaPromise<GetInvitationAggregateType<T>>

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationGroupByArgs} args - Group by arguments.
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
      T extends InvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationGroupByArgs['orderBy'] }
        : { orderBy?: InvitationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invitation model
   */
  readonly fields: InvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    chatGroup<T extends ChatGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatGroupDefaultArgs<ExtArgs>>): Prisma__ChatGroupClient<$Result.GetResult<Prisma.$ChatGroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    interest<T extends interestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, interestDefaultArgs<ExtArgs>>): Prisma__interestClient<$Result.GetResult<Prisma.$interestPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Invitation model
   */ 
  interface InvitationFieldRefs {
    readonly id: FieldRef<"Invitation", 'String'>
    readonly senderId: FieldRef<"Invitation", 'String'>
    readonly chatGroupId: FieldRef<"Invitation", 'String'>
    readonly interestId: FieldRef<"Invitation", 'String'>
    readonly createdAt: FieldRef<"Invitation", 'DateTime'>
    readonly updatedAt: FieldRef<"Invitation", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Invitation findUnique
   */
  export type InvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }


  /**
   * Invitation findUniqueOrThrow
   */
  export type InvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }


  /**
   * Invitation findFirst
   */
  export type InvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }


  /**
   * Invitation findFirstOrThrow
   */
  export type InvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }


  /**
   * Invitation findMany
   */
  export type InvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }


  /**
   * Invitation create
   */
  export type InvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a Invitation.
     */
    data: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
  }


  /**
   * Invitation createMany
   */
  export type InvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
  }


  /**
   * Invitation update
   */
  export type InvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a Invitation.
     */
    data: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
    /**
     * Choose, which Invitation to update.
     */
    where: InvitationWhereUniqueInput
  }


  /**
   * Invitation updateMany
   */
  export type InvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
  }


  /**
   * Invitation upsert
   */
  export type InvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the Invitation to update in case it exists.
     */
    where: InvitationWhereUniqueInput
    /**
     * In case the Invitation found by the `where` argument doesn't exist, create a new Invitation with this data.
     */
    create: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
    /**
     * In case the Invitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
  }


  /**
   * Invitation delete
   */
  export type InvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter which Invitation to delete.
     */
    where: InvitationWhereUniqueInput
  }


  /**
   * Invitation deleteMany
   */
  export type InvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitations to delete
     */
    where?: InvitationWhereInput
  }


  /**
   * Invitation findRaw
   */
  export type InvitationFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Invitation aggregateRaw
   */
  export type InvitationAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Invitation without action
   */
  export type InvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: InvitationInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    userId: 'userId',
    programmingLanguages: 'programmingLanguages',
    domains: 'domains',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const GoodIdeaScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoodIdeaScalarFieldEnum = (typeof GoodIdeaScalarFieldEnum)[keyof typeof GoodIdeaScalarFieldEnum]


  export const BadIdeaScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BadIdeaScalarFieldEnum = (typeof BadIdeaScalarFieldEnum)[keyof typeof BadIdeaScalarFieldEnum]


  export const InterestScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InterestScalarFieldEnum = (typeof InterestScalarFieldEnum)[keyof typeof InterestScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstName: 'firstName',
    secondName: 'secondName',
    country: 'country',
    educationExperience: 'educationExperience',
    domains: 'domains',
    profilePicture: 'profilePicture',
    programmingLanguages: 'programmingLanguages',
    biography: 'biography',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    senderId: 'senderId',
    chatGroupId: 'chatGroupId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const ChatGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    postId: 'postId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatGroupScalarFieldEnum = (typeof ChatGroupScalarFieldEnum)[keyof typeof ChatGroupScalarFieldEnum]


  export const ChatGroupUserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    chatGroupId: 'chatGroupId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatGroupUserScalarFieldEnum = (typeof ChatGroupUserScalarFieldEnum)[keyof typeof ChatGroupUserScalarFieldEnum]


  export const InvitationScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    chatGroupId: 'chatGroupId',
    interestId: 'interestId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    body?: StringFilter<"Post"> | string
    userId?: StringFilter<"Post"> | string
    programmingLanguages?: StringNullableListFilter<"Post">
    domains?: StringNullableListFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    interests?: InterestListRelationFilter
    goodIdeas?: GoodIdeaListRelationFilter
    badIdeas?: BadIdeaListRelationFilter
    chatGroup?: ChatGroupListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    userId?: SortOrder
    programmingLanguages?: SortOrder
    domains?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    interests?: interestOrderByRelationAggregateInput
    goodIdeas?: goodIdeaOrderByRelationAggregateInput
    badIdeas?: badIdeaOrderByRelationAggregateInput
    chatGroup?: ChatGroupOrderByRelationAggregateInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    body?: StringFilter<"Post"> | string
    userId?: StringFilter<"Post"> | string
    programmingLanguages?: StringNullableListFilter<"Post">
    domains?: StringNullableListFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    interests?: InterestListRelationFilter
    goodIdeas?: GoodIdeaListRelationFilter
    badIdeas?: BadIdeaListRelationFilter
    chatGroup?: ChatGroupListRelationFilter
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    userId?: SortOrder
    programmingLanguages?: SortOrder
    domains?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    body?: StringWithAggregatesFilter<"Post"> | string
    userId?: StringWithAggregatesFilter<"Post"> | string
    programmingLanguages?: StringNullableListFilter<"Post">
    domains?: StringNullableListFilter<"Post">
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type goodIdeaWhereInput = {
    AND?: goodIdeaWhereInput | goodIdeaWhereInput[]
    OR?: goodIdeaWhereInput[]
    NOT?: goodIdeaWhereInput | goodIdeaWhereInput[]
    id?: StringFilter<"goodIdea"> | string
    postId?: StringFilter<"goodIdea"> | string
    userId?: StringFilter<"goodIdea"> | string
    createdAt?: DateTimeFilter<"goodIdea"> | Date | string
    updatedAt?: DateTimeFilter<"goodIdea"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type goodIdeaOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type goodIdeaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: goodIdeaWhereInput | goodIdeaWhereInput[]
    OR?: goodIdeaWhereInput[]
    NOT?: goodIdeaWhereInput | goodIdeaWhereInput[]
    postId?: StringFilter<"goodIdea"> | string
    userId?: StringFilter<"goodIdea"> | string
    createdAt?: DateTimeFilter<"goodIdea"> | Date | string
    updatedAt?: DateTimeFilter<"goodIdea"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type goodIdeaOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: goodIdeaCountOrderByAggregateInput
    _max?: goodIdeaMaxOrderByAggregateInput
    _min?: goodIdeaMinOrderByAggregateInput
  }

  export type goodIdeaScalarWhereWithAggregatesInput = {
    AND?: goodIdeaScalarWhereWithAggregatesInput | goodIdeaScalarWhereWithAggregatesInput[]
    OR?: goodIdeaScalarWhereWithAggregatesInput[]
    NOT?: goodIdeaScalarWhereWithAggregatesInput | goodIdeaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"goodIdea"> | string
    postId?: StringWithAggregatesFilter<"goodIdea"> | string
    userId?: StringWithAggregatesFilter<"goodIdea"> | string
    createdAt?: DateTimeWithAggregatesFilter<"goodIdea"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"goodIdea"> | Date | string
  }

  export type badIdeaWhereInput = {
    AND?: badIdeaWhereInput | badIdeaWhereInput[]
    OR?: badIdeaWhereInput[]
    NOT?: badIdeaWhereInput | badIdeaWhereInput[]
    id?: StringFilter<"badIdea"> | string
    postId?: StringFilter<"badIdea"> | string
    userId?: StringFilter<"badIdea"> | string
    createdAt?: DateTimeFilter<"badIdea"> | Date | string
    updatedAt?: DateTimeFilter<"badIdea"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type badIdeaOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type badIdeaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: badIdeaWhereInput | badIdeaWhereInput[]
    OR?: badIdeaWhereInput[]
    NOT?: badIdeaWhereInput | badIdeaWhereInput[]
    postId?: StringFilter<"badIdea"> | string
    userId?: StringFilter<"badIdea"> | string
    createdAt?: DateTimeFilter<"badIdea"> | Date | string
    updatedAt?: DateTimeFilter<"badIdea"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type badIdeaOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: badIdeaCountOrderByAggregateInput
    _max?: badIdeaMaxOrderByAggregateInput
    _min?: badIdeaMinOrderByAggregateInput
  }

  export type badIdeaScalarWhereWithAggregatesInput = {
    AND?: badIdeaScalarWhereWithAggregatesInput | badIdeaScalarWhereWithAggregatesInput[]
    OR?: badIdeaScalarWhereWithAggregatesInput[]
    NOT?: badIdeaScalarWhereWithAggregatesInput | badIdeaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"badIdea"> | string
    postId?: StringWithAggregatesFilter<"badIdea"> | string
    userId?: StringWithAggregatesFilter<"badIdea"> | string
    createdAt?: DateTimeWithAggregatesFilter<"badIdea"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"badIdea"> | Date | string
  }

  export type interestWhereInput = {
    AND?: interestWhereInput | interestWhereInput[]
    OR?: interestWhereInput[]
    NOT?: interestWhereInput | interestWhereInput[]
    id?: StringFilter<"interest"> | string
    postId?: StringFilter<"interest"> | string
    userId?: StringFilter<"interest"> | string
    createdAt?: DateTimeFilter<"interest"> | Date | string
    updatedAt?: DateTimeFilter<"interest"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    invitation?: InvitationListRelationFilter
  }

  export type interestOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    invitation?: InvitationOrderByRelationAggregateInput
  }

  export type interestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: interestWhereInput | interestWhereInput[]
    OR?: interestWhereInput[]
    NOT?: interestWhereInput | interestWhereInput[]
    postId?: StringFilter<"interest"> | string
    userId?: StringFilter<"interest"> | string
    createdAt?: DateTimeFilter<"interest"> | Date | string
    updatedAt?: DateTimeFilter<"interest"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    invitation?: InvitationListRelationFilter
  }, "id">

  export type interestOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: interestCountOrderByAggregateInput
    _max?: interestMaxOrderByAggregateInput
    _min?: interestMinOrderByAggregateInput
  }

  export type interestScalarWhereWithAggregatesInput = {
    AND?: interestScalarWhereWithAggregatesInput | interestScalarWhereWithAggregatesInput[]
    OR?: interestScalarWhereWithAggregatesInput[]
    NOT?: interestScalarWhereWithAggregatesInput | interestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"interest"> | string
    postId?: StringWithAggregatesFilter<"interest"> | string
    userId?: StringWithAggregatesFilter<"interest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"interest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"interest"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    secondName?: StringNullableFilter<"User"> | string | null
    country?: StringFilter<"User"> | string
    educationExperience?: StringFilter<"User"> | string
    domains?: StringNullableListFilter<"User">
    profilePicture?: StringNullableFilter<"User"> | string | null
    programmingLanguages?: StringNullableListFilter<"User">
    biography?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    posts?: PostListRelationFilter
    goodIdeas?: GoodIdeaListRelationFilter
    badIdeas?: BadIdeaListRelationFilter
    interests?: InterestListRelationFilter
    messages?: ChatMessageListRelationFilter
    chatGroups?: ChatGroupUserListRelationFilter
    Invitations?: InvitationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    secondName?: SortOrder
    country?: SortOrder
    educationExperience?: SortOrder
    domains?: SortOrder
    profilePicture?: SortOrder
    programmingLanguages?: SortOrder
    biography?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    goodIdeas?: goodIdeaOrderByRelationAggregateInput
    badIdeas?: badIdeaOrderByRelationAggregateInput
    interests?: interestOrderByRelationAggregateInput
    messages?: ChatMessageOrderByRelationAggregateInput
    chatGroups?: ChatGroupUserOrderByRelationAggregateInput
    Invitations?: InvitationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    secondName?: StringNullableFilter<"User"> | string | null
    country?: StringFilter<"User"> | string
    educationExperience?: StringFilter<"User"> | string
    domains?: StringNullableListFilter<"User">
    profilePicture?: StringNullableFilter<"User"> | string | null
    programmingLanguages?: StringNullableListFilter<"User">
    biography?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    posts?: PostListRelationFilter
    goodIdeas?: GoodIdeaListRelationFilter
    badIdeas?: BadIdeaListRelationFilter
    interests?: InterestListRelationFilter
    messages?: ChatMessageListRelationFilter
    chatGroups?: ChatGroupUserListRelationFilter
    Invitations?: InvitationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    secondName?: SortOrder
    country?: SortOrder
    educationExperience?: SortOrder
    domains?: SortOrder
    profilePicture?: SortOrder
    programmingLanguages?: SortOrder
    biography?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    secondName?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringWithAggregatesFilter<"User"> | string
    educationExperience?: StringWithAggregatesFilter<"User"> | string
    domains?: StringNullableListFilter<"User">
    profilePicture?: StringNullableWithAggregatesFilter<"User"> | string | null
    programmingLanguages?: StringNullableListFilter<"User">
    biography?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    chatGroupId?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    sender?: XOR<UserRelationFilter, UserWhereInput>
    chatGroup?: XOR<ChatGroupRelationFilter, ChatGroupWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    chatGroupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    chatGroup?: ChatGroupOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    content?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    chatGroupId?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
    sender?: XOR<UserRelationFilter, UserWhereInput>
    chatGroup?: XOR<ChatGroupRelationFilter, ChatGroupWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    chatGroupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    senderId?: StringWithAggregatesFilter<"ChatMessage"> | string
    chatGroupId?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type ChatGroupWhereInput = {
    AND?: ChatGroupWhereInput | ChatGroupWhereInput[]
    OR?: ChatGroupWhereInput[]
    NOT?: ChatGroupWhereInput | ChatGroupWhereInput[]
    id?: StringFilter<"ChatGroup"> | string
    name?: StringFilter<"ChatGroup"> | string
    postId?: StringFilter<"ChatGroup"> | string
    createdAt?: DateTimeFilter<"ChatGroup"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroup"> | Date | string
    members?: ChatGroupUserListRelationFilter
    messages?: ChatMessageListRelationFilter
    invitations?: InvitationListRelationFilter
    post?: XOR<PostRelationFilter, PostWhereInput>
  }

  export type ChatGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: ChatGroupUserOrderByRelationAggregateInput
    messages?: ChatMessageOrderByRelationAggregateInput
    invitations?: InvitationOrderByRelationAggregateInput
    post?: PostOrderByWithRelationInput
  }

  export type ChatGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatGroupWhereInput | ChatGroupWhereInput[]
    OR?: ChatGroupWhereInput[]
    NOT?: ChatGroupWhereInput | ChatGroupWhereInput[]
    name?: StringFilter<"ChatGroup"> | string
    postId?: StringFilter<"ChatGroup"> | string
    createdAt?: DateTimeFilter<"ChatGroup"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroup"> | Date | string
    members?: ChatGroupUserListRelationFilter
    messages?: ChatMessageListRelationFilter
    invitations?: InvitationListRelationFilter
    post?: XOR<PostRelationFilter, PostWhereInput>
  }, "id">

  export type ChatGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatGroupCountOrderByAggregateInput
    _max?: ChatGroupMaxOrderByAggregateInput
    _min?: ChatGroupMinOrderByAggregateInput
  }

  export type ChatGroupScalarWhereWithAggregatesInput = {
    AND?: ChatGroupScalarWhereWithAggregatesInput | ChatGroupScalarWhereWithAggregatesInput[]
    OR?: ChatGroupScalarWhereWithAggregatesInput[]
    NOT?: ChatGroupScalarWhereWithAggregatesInput | ChatGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatGroup"> | string
    name?: StringWithAggregatesFilter<"ChatGroup"> | string
    postId?: StringWithAggregatesFilter<"ChatGroup"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatGroup"> | Date | string
  }

  export type ChatGroupUserWhereInput = {
    AND?: ChatGroupUserWhereInput | ChatGroupUserWhereInput[]
    OR?: ChatGroupUserWhereInput[]
    NOT?: ChatGroupUserWhereInput | ChatGroupUserWhereInput[]
    id?: StringFilter<"ChatGroupUser"> | string
    userId?: StringFilter<"ChatGroupUser"> | string
    chatGroupId?: StringFilter<"ChatGroupUser"> | string
    createdAt?: DateTimeFilter<"ChatGroupUser"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroupUser"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    chatGroup?: XOR<ChatGroupRelationFilter, ChatGroupWhereInput>
  }

  export type ChatGroupUserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    chatGroup?: ChatGroupOrderByWithRelationInput
  }

  export type ChatGroupUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatGroupUserWhereInput | ChatGroupUserWhereInput[]
    OR?: ChatGroupUserWhereInput[]
    NOT?: ChatGroupUserWhereInput | ChatGroupUserWhereInput[]
    userId?: StringFilter<"ChatGroupUser"> | string
    chatGroupId?: StringFilter<"ChatGroupUser"> | string
    createdAt?: DateTimeFilter<"ChatGroupUser"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroupUser"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    chatGroup?: XOR<ChatGroupRelationFilter, ChatGroupWhereInput>
  }, "id">

  export type ChatGroupUserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatGroupUserCountOrderByAggregateInput
    _max?: ChatGroupUserMaxOrderByAggregateInput
    _min?: ChatGroupUserMinOrderByAggregateInput
  }

  export type ChatGroupUserScalarWhereWithAggregatesInput = {
    AND?: ChatGroupUserScalarWhereWithAggregatesInput | ChatGroupUserScalarWhereWithAggregatesInput[]
    OR?: ChatGroupUserScalarWhereWithAggregatesInput[]
    NOT?: ChatGroupUserScalarWhereWithAggregatesInput | ChatGroupUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatGroupUser"> | string
    userId?: StringWithAggregatesFilter<"ChatGroupUser"> | string
    chatGroupId?: StringWithAggregatesFilter<"ChatGroupUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatGroupUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatGroupUser"> | Date | string
  }

  export type InvitationWhereInput = {
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    id?: StringFilter<"Invitation"> | string
    senderId?: StringFilter<"Invitation"> | string
    chatGroupId?: StringFilter<"Invitation"> | string
    interestId?: StringFilter<"Invitation"> | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
    sender?: XOR<UserRelationFilter, UserWhereInput>
    chatGroup?: XOR<ChatGroupRelationFilter, ChatGroupWhereInput>
    interest?: XOR<InterestRelationFilter, interestWhereInput>
  }

  export type InvitationOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    chatGroupId?: SortOrder
    interestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sender?: UserOrderByWithRelationInput
    chatGroup?: ChatGroupOrderByWithRelationInput
    interest?: interestOrderByWithRelationInput
  }

  export type InvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    senderId?: StringFilter<"Invitation"> | string
    chatGroupId?: StringFilter<"Invitation"> | string
    interestId?: StringFilter<"Invitation"> | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
    sender?: XOR<UserRelationFilter, UserWhereInput>
    chatGroup?: XOR<ChatGroupRelationFilter, ChatGroupWhereInput>
    interest?: XOR<InterestRelationFilter, interestWhereInput>
  }, "id">

  export type InvitationOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    chatGroupId?: SortOrder
    interestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvitationCountOrderByAggregateInput
    _max?: InvitationMaxOrderByAggregateInput
    _min?: InvitationMinOrderByAggregateInput
  }

  export type InvitationScalarWhereWithAggregatesInput = {
    AND?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    OR?: InvitationScalarWhereWithAggregatesInput[]
    NOT?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invitation"> | string
    senderId?: StringWithAggregatesFilter<"Invitation"> | string
    chatGroupId?: StringWithAggregatesFilter<"Invitation"> | string
    interestId?: StringWithAggregatesFilter<"Invitation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
  }

  export type PostCreateInput = {
    id?: string
    title: string
    body: string
    programmingLanguages?: PostCreateprogrammingLanguagesInput | string[]
    domains?: PostCreatedomainsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    interests?: interestCreateNestedManyWithoutPostInput
    goodIdeas?: goodIdeaCreateNestedManyWithoutPostInput
    badIdeas?: badIdeaCreateNestedManyWithoutPostInput
    chatGroup?: ChatGroupCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    body: string
    userId: string
    programmingLanguages?: PostCreateprogrammingLanguagesInput | string[]
    domains?: PostCreatedomainsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    interests?: interestUncheckedCreateNestedManyWithoutPostInput
    goodIdeas?: goodIdeaUncheckedCreateNestedManyWithoutPostInput
    badIdeas?: badIdeaUncheckedCreateNestedManyWithoutPostInput
    chatGroup?: ChatGroupUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    programmingLanguages?: PostUpdateprogrammingLanguagesInput | string[]
    domains?: PostUpdatedomainsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    interests?: interestUpdateManyWithoutPostNestedInput
    goodIdeas?: goodIdeaUpdateManyWithoutPostNestedInput
    badIdeas?: badIdeaUpdateManyWithoutPostNestedInput
    chatGroup?: ChatGroupUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    programmingLanguages?: PostUpdateprogrammingLanguagesInput | string[]
    domains?: PostUpdatedomainsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: interestUncheckedUpdateManyWithoutPostNestedInput
    goodIdeas?: goodIdeaUncheckedUpdateManyWithoutPostNestedInput
    badIdeas?: badIdeaUncheckedUpdateManyWithoutPostNestedInput
    chatGroup?: ChatGroupUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    body: string
    userId: string
    programmingLanguages?: PostCreateprogrammingLanguagesInput | string[]
    domains?: PostCreatedomainsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    programmingLanguages?: PostUpdateprogrammingLanguagesInput | string[]
    domains?: PostUpdatedomainsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    programmingLanguages?: PostUpdateprogrammingLanguagesInput | string[]
    domains?: PostUpdatedomainsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goodIdeaCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutGoodIdeasInput
    user: UserCreateNestedOneWithoutGoodIdeasInput
  }

  export type goodIdeaUncheckedCreateInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type goodIdeaUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutGoodIdeasNestedInput
    user?: UserUpdateOneRequiredWithoutGoodIdeasNestedInput
  }

  export type goodIdeaUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goodIdeaCreateManyInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type goodIdeaUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goodIdeaUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type badIdeaCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutBadIdeasInput
    user: UserCreateNestedOneWithoutBadIdeasInput
  }

  export type badIdeaUncheckedCreateInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type badIdeaUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutBadIdeasNestedInput
    user?: UserUpdateOneRequiredWithoutBadIdeasNestedInput
  }

  export type badIdeaUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type badIdeaCreateManyInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type badIdeaUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type badIdeaUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type interestCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutInterestsInput
    user: UserCreateNestedOneWithoutInterestsInput
    invitation?: InvitationCreateNestedManyWithoutInterestInput
  }

  export type interestUncheckedCreateInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invitation?: InvitationUncheckedCreateNestedManyWithoutInterestInput
  }

  export type interestUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutInterestsNestedInput
    user?: UserUpdateOneRequiredWithoutInterestsNestedInput
    invitation?: InvitationUpdateManyWithoutInterestNestedInput
  }

  export type interestUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: InvitationUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type interestCreateManyInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type interestUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type interestUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    firstName: string
    secondName?: string | null
    country: string
    educationExperience: string
    domains?: UserCreatedomainsInput | string[]
    profilePicture?: string | null
    programmingLanguages?: UserCreateprogrammingLanguagesInput | string[]
    biography?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    goodIdeas?: goodIdeaCreateNestedManyWithoutUserInput
    badIdeas?: badIdeaCreateNestedManyWithoutUserInput
    interests?: interestCreateNestedManyWithoutUserInput
    messages?: ChatMessageCreateNestedManyWithoutSenderInput
    chatGroups?: ChatGroupUserCreateNestedManyWithoutUserInput
    Invitations?: InvitationCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    firstName: string
    secondName?: string | null
    country: string
    educationExperience: string
    domains?: UserCreatedomainsInput | string[]
    profilePicture?: string | null
    programmingLanguages?: UserCreateprogrammingLanguagesInput | string[]
    biography?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    goodIdeas?: goodIdeaUncheckedCreateNestedManyWithoutUserInput
    badIdeas?: badIdeaUncheckedCreateNestedManyWithoutUserInput
    interests?: interestUncheckedCreateNestedManyWithoutUserInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    chatGroups?: ChatGroupUserUncheckedCreateNestedManyWithoutUserInput
    Invitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    educationExperience?: StringFieldUpdateOperationsInput | string
    domains?: UserUpdatedomainsInput | string[]
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    programmingLanguages?: UserUpdateprogrammingLanguagesInput | string[]
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    goodIdeas?: goodIdeaUpdateManyWithoutUserNestedInput
    badIdeas?: badIdeaUpdateManyWithoutUserNestedInput
    interests?: interestUpdateManyWithoutUserNestedInput
    messages?: ChatMessageUpdateManyWithoutSenderNestedInput
    chatGroups?: ChatGroupUserUpdateManyWithoutUserNestedInput
    Invitations?: InvitationUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    educationExperience?: StringFieldUpdateOperationsInput | string
    domains?: UserUpdatedomainsInput | string[]
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    programmingLanguages?: UserUpdateprogrammingLanguagesInput | string[]
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    goodIdeas?: goodIdeaUncheckedUpdateManyWithoutUserNestedInput
    badIdeas?: badIdeaUncheckedUpdateManyWithoutUserNestedInput
    interests?: interestUncheckedUpdateManyWithoutUserNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    chatGroups?: ChatGroupUserUncheckedUpdateManyWithoutUserNestedInput
    Invitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    firstName: string
    secondName?: string | null
    country: string
    educationExperience: string
    domains?: UserCreatedomainsInput | string[]
    profilePicture?: string | null
    programmingLanguages?: UserCreateprogrammingLanguagesInput | string[]
    biography?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    educationExperience?: StringFieldUpdateOperationsInput | string
    domains?: UserUpdatedomainsInput | string[]
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    programmingLanguages?: UserUpdateprogrammingLanguagesInput | string[]
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    educationExperience?: StringFieldUpdateOperationsInput | string
    domains?: UserUpdatedomainsInput | string[]
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    programmingLanguages?: UserUpdateprogrammingLanguagesInput | string[]
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
    chatGroup: ChatGroupCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    content: string
    senderId: string
    chatGroupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    chatGroup?: ChatGroupUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    chatGroupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    content: string
    senderId: string
    chatGroupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    chatGroupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatGroupUserCreateNestedManyWithoutChatGroupInput
    messages?: ChatMessageCreateNestedManyWithoutChatGroupInput
    invitations?: InvitationCreateNestedManyWithoutChatGroupInput
    post: PostCreateNestedOneWithoutChatGroupInput
  }

  export type ChatGroupUncheckedCreateInput = {
    id?: string
    name: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatGroupUserUncheckedCreateNestedManyWithoutChatGroupInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatGroupInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatGroupUserUpdateManyWithoutChatGroupNestedInput
    messages?: ChatMessageUpdateManyWithoutChatGroupNestedInput
    invitations?: InvitationUpdateManyWithoutChatGroupNestedInput
    post?: PostUpdateOneRequiredWithoutChatGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatGroupUserUncheckedUpdateManyWithoutChatGroupNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatGroupNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutChatGroupNestedInput
  }

  export type ChatGroupCreateManyInput = {
    id?: string
    name: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupUserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatGroupsInput
    chatGroup: ChatGroupCreateNestedOneWithoutMembersInput
  }

  export type ChatGroupUserUncheckedCreateInput = {
    id?: string
    userId: string
    chatGroupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupUserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatGroupsNestedInput
    chatGroup?: ChatGroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ChatGroupUserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    chatGroupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupUserCreateManyInput = {
    id?: string
    userId: string
    chatGroupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupUserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupUserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    chatGroupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutInvitationsInput
    chatGroup: ChatGroupCreateNestedOneWithoutInvitationsInput
    interest: interestCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUncheckedCreateInput = {
    id?: string
    senderId: string
    chatGroupId: string
    interestId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutInvitationsNestedInput
    chatGroup?: ChatGroupUpdateOneRequiredWithoutInvitationsNestedInput
    interest?: interestUpdateOneRequiredWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateInput = {
    senderId?: StringFieldUpdateOperationsInput | string
    chatGroupId?: StringFieldUpdateOperationsInput | string
    interestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateManyInput = {
    id?: string
    senderId: string
    chatGroupId: string
    interestId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyInput = {
    senderId?: StringFieldUpdateOperationsInput | string
    chatGroupId?: StringFieldUpdateOperationsInput | string
    interestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type InterestListRelationFilter = {
    every?: interestWhereInput
    some?: interestWhereInput
    none?: interestWhereInput
  }

  export type GoodIdeaListRelationFilter = {
    every?: goodIdeaWhereInput
    some?: goodIdeaWhereInput
    none?: goodIdeaWhereInput
  }

  export type BadIdeaListRelationFilter = {
    every?: badIdeaWhereInput
    some?: badIdeaWhereInput
    none?: badIdeaWhereInput
  }

  export type ChatGroupListRelationFilter = {
    every?: ChatGroupWhereInput
    some?: ChatGroupWhereInput
    none?: ChatGroupWhereInput
  }

  export type interestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type goodIdeaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type badIdeaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    userId?: SortOrder
    programmingLanguages?: SortOrder
    domains?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type goodIdeaCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type goodIdeaMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type goodIdeaMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type badIdeaCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type badIdeaMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type badIdeaMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationListRelationFilter = {
    every?: InvitationWhereInput
    some?: InvitationWhereInput
    none?: InvitationWhereInput
  }

  export type InvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type interestCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type interestMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type interestMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type ChatGroupUserListRelationFilter = {
    every?: ChatGroupUserWhereInput
    some?: ChatGroupUserWhereInput
    none?: ChatGroupUserWhereInput
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatGroupUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    secondName?: SortOrder
    country?: SortOrder
    educationExperience?: SortOrder
    domains?: SortOrder
    profilePicture?: SortOrder
    programmingLanguages?: SortOrder
    biography?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    secondName?: SortOrder
    country?: SortOrder
    educationExperience?: SortOrder
    profilePicture?: SortOrder
    biography?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    secondName?: SortOrder
    country?: SortOrder
    educationExperience?: SortOrder
    profilePicture?: SortOrder
    biography?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ChatGroupRelationFilter = {
    is?: ChatGroupWhereInput
    isNot?: ChatGroupWhereInput
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    chatGroupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    chatGroupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    senderId?: SortOrder
    chatGroupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupUserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupUserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGroupUserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    chatGroupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InterestRelationFilter = {
    is?: interestWhereInput
    isNot?: interestWhereInput
  }

  export type InvitationCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    chatGroupId?: SortOrder
    interestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    chatGroupId?: SortOrder
    interestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    chatGroupId?: SortOrder
    interestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostCreateprogrammingLanguagesInput = {
    set: string[]
  }

  export type PostCreatedomainsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type interestCreateNestedManyWithoutPostInput = {
    create?: XOR<interestCreateWithoutPostInput, interestUncheckedCreateWithoutPostInput> | interestCreateWithoutPostInput[] | interestUncheckedCreateWithoutPostInput[]
    connectOrCreate?: interestCreateOrConnectWithoutPostInput | interestCreateOrConnectWithoutPostInput[]
    createMany?: interestCreateManyPostInputEnvelope
    connect?: interestWhereUniqueInput | interestWhereUniqueInput[]
  }

  export type goodIdeaCreateNestedManyWithoutPostInput = {
    create?: XOR<goodIdeaCreateWithoutPostInput, goodIdeaUncheckedCreateWithoutPostInput> | goodIdeaCreateWithoutPostInput[] | goodIdeaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: goodIdeaCreateOrConnectWithoutPostInput | goodIdeaCreateOrConnectWithoutPostInput[]
    createMany?: goodIdeaCreateManyPostInputEnvelope
    connect?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
  }

  export type badIdeaCreateNestedManyWithoutPostInput = {
    create?: XOR<badIdeaCreateWithoutPostInput, badIdeaUncheckedCreateWithoutPostInput> | badIdeaCreateWithoutPostInput[] | badIdeaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: badIdeaCreateOrConnectWithoutPostInput | badIdeaCreateOrConnectWithoutPostInput[]
    createMany?: badIdeaCreateManyPostInputEnvelope
    connect?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
  }

  export type ChatGroupCreateNestedManyWithoutPostInput = {
    create?: XOR<ChatGroupCreateWithoutPostInput, ChatGroupUncheckedCreateWithoutPostInput> | ChatGroupCreateWithoutPostInput[] | ChatGroupUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutPostInput | ChatGroupCreateOrConnectWithoutPostInput[]
    createMany?: ChatGroupCreateManyPostInputEnvelope
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
  }

  export type interestUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<interestCreateWithoutPostInput, interestUncheckedCreateWithoutPostInput> | interestCreateWithoutPostInput[] | interestUncheckedCreateWithoutPostInput[]
    connectOrCreate?: interestCreateOrConnectWithoutPostInput | interestCreateOrConnectWithoutPostInput[]
    createMany?: interestCreateManyPostInputEnvelope
    connect?: interestWhereUniqueInput | interestWhereUniqueInput[]
  }

  export type goodIdeaUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<goodIdeaCreateWithoutPostInput, goodIdeaUncheckedCreateWithoutPostInput> | goodIdeaCreateWithoutPostInput[] | goodIdeaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: goodIdeaCreateOrConnectWithoutPostInput | goodIdeaCreateOrConnectWithoutPostInput[]
    createMany?: goodIdeaCreateManyPostInputEnvelope
    connect?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
  }

  export type badIdeaUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<badIdeaCreateWithoutPostInput, badIdeaUncheckedCreateWithoutPostInput> | badIdeaCreateWithoutPostInput[] | badIdeaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: badIdeaCreateOrConnectWithoutPostInput | badIdeaCreateOrConnectWithoutPostInput[]
    createMany?: badIdeaCreateManyPostInputEnvelope
    connect?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
  }

  export type ChatGroupUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ChatGroupCreateWithoutPostInput, ChatGroupUncheckedCreateWithoutPostInput> | ChatGroupCreateWithoutPostInput[] | ChatGroupUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutPostInput | ChatGroupCreateOrConnectWithoutPostInput[]
    createMany?: ChatGroupCreateManyPostInputEnvelope
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PostUpdateprogrammingLanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PostUpdatedomainsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type interestUpdateManyWithoutPostNestedInput = {
    create?: XOR<interestCreateWithoutPostInput, interestUncheckedCreateWithoutPostInput> | interestCreateWithoutPostInput[] | interestUncheckedCreateWithoutPostInput[]
    connectOrCreate?: interestCreateOrConnectWithoutPostInput | interestCreateOrConnectWithoutPostInput[]
    upsert?: interestUpsertWithWhereUniqueWithoutPostInput | interestUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: interestCreateManyPostInputEnvelope
    set?: interestWhereUniqueInput | interestWhereUniqueInput[]
    disconnect?: interestWhereUniqueInput | interestWhereUniqueInput[]
    delete?: interestWhereUniqueInput | interestWhereUniqueInput[]
    connect?: interestWhereUniqueInput | interestWhereUniqueInput[]
    update?: interestUpdateWithWhereUniqueWithoutPostInput | interestUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: interestUpdateManyWithWhereWithoutPostInput | interestUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: interestScalarWhereInput | interestScalarWhereInput[]
  }

  export type goodIdeaUpdateManyWithoutPostNestedInput = {
    create?: XOR<goodIdeaCreateWithoutPostInput, goodIdeaUncheckedCreateWithoutPostInput> | goodIdeaCreateWithoutPostInput[] | goodIdeaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: goodIdeaCreateOrConnectWithoutPostInput | goodIdeaCreateOrConnectWithoutPostInput[]
    upsert?: goodIdeaUpsertWithWhereUniqueWithoutPostInput | goodIdeaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: goodIdeaCreateManyPostInputEnvelope
    set?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
    disconnect?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
    delete?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
    connect?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
    update?: goodIdeaUpdateWithWhereUniqueWithoutPostInput | goodIdeaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: goodIdeaUpdateManyWithWhereWithoutPostInput | goodIdeaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: goodIdeaScalarWhereInput | goodIdeaScalarWhereInput[]
  }

  export type badIdeaUpdateManyWithoutPostNestedInput = {
    create?: XOR<badIdeaCreateWithoutPostInput, badIdeaUncheckedCreateWithoutPostInput> | badIdeaCreateWithoutPostInput[] | badIdeaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: badIdeaCreateOrConnectWithoutPostInput | badIdeaCreateOrConnectWithoutPostInput[]
    upsert?: badIdeaUpsertWithWhereUniqueWithoutPostInput | badIdeaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: badIdeaCreateManyPostInputEnvelope
    set?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
    disconnect?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
    delete?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
    connect?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
    update?: badIdeaUpdateWithWhereUniqueWithoutPostInput | badIdeaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: badIdeaUpdateManyWithWhereWithoutPostInput | badIdeaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: badIdeaScalarWhereInput | badIdeaScalarWhereInput[]
  }

  export type ChatGroupUpdateManyWithoutPostNestedInput = {
    create?: XOR<ChatGroupCreateWithoutPostInput, ChatGroupUncheckedCreateWithoutPostInput> | ChatGroupCreateWithoutPostInput[] | ChatGroupUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutPostInput | ChatGroupCreateOrConnectWithoutPostInput[]
    upsert?: ChatGroupUpsertWithWhereUniqueWithoutPostInput | ChatGroupUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ChatGroupCreateManyPostInputEnvelope
    set?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    disconnect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    delete?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    update?: ChatGroupUpdateWithWhereUniqueWithoutPostInput | ChatGroupUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ChatGroupUpdateManyWithWhereWithoutPostInput | ChatGroupUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
  }

  export type interestUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<interestCreateWithoutPostInput, interestUncheckedCreateWithoutPostInput> | interestCreateWithoutPostInput[] | interestUncheckedCreateWithoutPostInput[]
    connectOrCreate?: interestCreateOrConnectWithoutPostInput | interestCreateOrConnectWithoutPostInput[]
    upsert?: interestUpsertWithWhereUniqueWithoutPostInput | interestUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: interestCreateManyPostInputEnvelope
    set?: interestWhereUniqueInput | interestWhereUniqueInput[]
    disconnect?: interestWhereUniqueInput | interestWhereUniqueInput[]
    delete?: interestWhereUniqueInput | interestWhereUniqueInput[]
    connect?: interestWhereUniqueInput | interestWhereUniqueInput[]
    update?: interestUpdateWithWhereUniqueWithoutPostInput | interestUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: interestUpdateManyWithWhereWithoutPostInput | interestUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: interestScalarWhereInput | interestScalarWhereInput[]
  }

  export type goodIdeaUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<goodIdeaCreateWithoutPostInput, goodIdeaUncheckedCreateWithoutPostInput> | goodIdeaCreateWithoutPostInput[] | goodIdeaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: goodIdeaCreateOrConnectWithoutPostInput | goodIdeaCreateOrConnectWithoutPostInput[]
    upsert?: goodIdeaUpsertWithWhereUniqueWithoutPostInput | goodIdeaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: goodIdeaCreateManyPostInputEnvelope
    set?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
    disconnect?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
    delete?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
    connect?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
    update?: goodIdeaUpdateWithWhereUniqueWithoutPostInput | goodIdeaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: goodIdeaUpdateManyWithWhereWithoutPostInput | goodIdeaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: goodIdeaScalarWhereInput | goodIdeaScalarWhereInput[]
  }

  export type badIdeaUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<badIdeaCreateWithoutPostInput, badIdeaUncheckedCreateWithoutPostInput> | badIdeaCreateWithoutPostInput[] | badIdeaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: badIdeaCreateOrConnectWithoutPostInput | badIdeaCreateOrConnectWithoutPostInput[]
    upsert?: badIdeaUpsertWithWhereUniqueWithoutPostInput | badIdeaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: badIdeaCreateManyPostInputEnvelope
    set?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
    disconnect?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
    delete?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
    connect?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
    update?: badIdeaUpdateWithWhereUniqueWithoutPostInput | badIdeaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: badIdeaUpdateManyWithWhereWithoutPostInput | badIdeaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: badIdeaScalarWhereInput | badIdeaScalarWhereInput[]
  }

  export type ChatGroupUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ChatGroupCreateWithoutPostInput, ChatGroupUncheckedCreateWithoutPostInput> | ChatGroupCreateWithoutPostInput[] | ChatGroupUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ChatGroupCreateOrConnectWithoutPostInput | ChatGroupCreateOrConnectWithoutPostInput[]
    upsert?: ChatGroupUpsertWithWhereUniqueWithoutPostInput | ChatGroupUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ChatGroupCreateManyPostInputEnvelope
    set?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    disconnect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    delete?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    connect?: ChatGroupWhereUniqueInput | ChatGroupWhereUniqueInput[]
    update?: ChatGroupUpdateWithWhereUniqueWithoutPostInput | ChatGroupUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ChatGroupUpdateManyWithWhereWithoutPostInput | ChatGroupUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutGoodIdeasInput = {
    create?: XOR<PostCreateWithoutGoodIdeasInput, PostUncheckedCreateWithoutGoodIdeasInput>
    connectOrCreate?: PostCreateOrConnectWithoutGoodIdeasInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGoodIdeasInput = {
    create?: XOR<UserCreateWithoutGoodIdeasInput, UserUncheckedCreateWithoutGoodIdeasInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoodIdeasInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutGoodIdeasNestedInput = {
    create?: XOR<PostCreateWithoutGoodIdeasInput, PostUncheckedCreateWithoutGoodIdeasInput>
    connectOrCreate?: PostCreateOrConnectWithoutGoodIdeasInput
    upsert?: PostUpsertWithoutGoodIdeasInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutGoodIdeasInput, PostUpdateWithoutGoodIdeasInput>, PostUncheckedUpdateWithoutGoodIdeasInput>
  }

  export type UserUpdateOneRequiredWithoutGoodIdeasNestedInput = {
    create?: XOR<UserCreateWithoutGoodIdeasInput, UserUncheckedCreateWithoutGoodIdeasInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoodIdeasInput
    upsert?: UserUpsertWithoutGoodIdeasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoodIdeasInput, UserUpdateWithoutGoodIdeasInput>, UserUncheckedUpdateWithoutGoodIdeasInput>
  }

  export type PostCreateNestedOneWithoutBadIdeasInput = {
    create?: XOR<PostCreateWithoutBadIdeasInput, PostUncheckedCreateWithoutBadIdeasInput>
    connectOrCreate?: PostCreateOrConnectWithoutBadIdeasInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBadIdeasInput = {
    create?: XOR<UserCreateWithoutBadIdeasInput, UserUncheckedCreateWithoutBadIdeasInput>
    connectOrCreate?: UserCreateOrConnectWithoutBadIdeasInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutBadIdeasNestedInput = {
    create?: XOR<PostCreateWithoutBadIdeasInput, PostUncheckedCreateWithoutBadIdeasInput>
    connectOrCreate?: PostCreateOrConnectWithoutBadIdeasInput
    upsert?: PostUpsertWithoutBadIdeasInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutBadIdeasInput, PostUpdateWithoutBadIdeasInput>, PostUncheckedUpdateWithoutBadIdeasInput>
  }

  export type UserUpdateOneRequiredWithoutBadIdeasNestedInput = {
    create?: XOR<UserCreateWithoutBadIdeasInput, UserUncheckedCreateWithoutBadIdeasInput>
    connectOrCreate?: UserCreateOrConnectWithoutBadIdeasInput
    upsert?: UserUpsertWithoutBadIdeasInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBadIdeasInput, UserUpdateWithoutBadIdeasInput>, UserUncheckedUpdateWithoutBadIdeasInput>
  }

  export type PostCreateNestedOneWithoutInterestsInput = {
    create?: XOR<PostCreateWithoutInterestsInput, PostUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: PostCreateOrConnectWithoutInterestsInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInterestsInput = {
    create?: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterestsInput
    connect?: UserWhereUniqueInput
  }

  export type InvitationCreateNestedManyWithoutInterestInput = {
    create?: XOR<InvitationCreateWithoutInterestInput, InvitationUncheckedCreateWithoutInterestInput> | InvitationCreateWithoutInterestInput[] | InvitationUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInterestInput | InvitationCreateOrConnectWithoutInterestInput[]
    createMany?: InvitationCreateManyInterestInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutInterestInput = {
    create?: XOR<InvitationCreateWithoutInterestInput, InvitationUncheckedCreateWithoutInterestInput> | InvitationCreateWithoutInterestInput[] | InvitationUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInterestInput | InvitationCreateOrConnectWithoutInterestInput[]
    createMany?: InvitationCreateManyInterestInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type PostUpdateOneRequiredWithoutInterestsNestedInput = {
    create?: XOR<PostCreateWithoutInterestsInput, PostUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: PostCreateOrConnectWithoutInterestsInput
    upsert?: PostUpsertWithoutInterestsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutInterestsInput, PostUpdateWithoutInterestsInput>, PostUncheckedUpdateWithoutInterestsInput>
  }

  export type UserUpdateOneRequiredWithoutInterestsNestedInput = {
    create?: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInterestsInput
    upsert?: UserUpsertWithoutInterestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInterestsInput, UserUpdateWithoutInterestsInput>, UserUncheckedUpdateWithoutInterestsInput>
  }

  export type InvitationUpdateManyWithoutInterestNestedInput = {
    create?: XOR<InvitationCreateWithoutInterestInput, InvitationUncheckedCreateWithoutInterestInput> | InvitationCreateWithoutInterestInput[] | InvitationUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInterestInput | InvitationCreateOrConnectWithoutInterestInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutInterestInput | InvitationUpsertWithWhereUniqueWithoutInterestInput[]
    createMany?: InvitationCreateManyInterestInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutInterestInput | InvitationUpdateWithWhereUniqueWithoutInterestInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutInterestInput | InvitationUpdateManyWithWhereWithoutInterestInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutInterestNestedInput = {
    create?: XOR<InvitationCreateWithoutInterestInput, InvitationUncheckedCreateWithoutInterestInput> | InvitationCreateWithoutInterestInput[] | InvitationUncheckedCreateWithoutInterestInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutInterestInput | InvitationCreateOrConnectWithoutInterestInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutInterestInput | InvitationUpsertWithWhereUniqueWithoutInterestInput[]
    createMany?: InvitationCreateManyInterestInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutInterestInput | InvitationUpdateWithWhereUniqueWithoutInterestInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutInterestInput | InvitationUpdateManyWithWhereWithoutInterestInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type UserCreatedomainsInput = {
    set: string[]
  }

  export type UserCreateprogrammingLanguagesInput = {
    set: string[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type goodIdeaCreateNestedManyWithoutUserInput = {
    create?: XOR<goodIdeaCreateWithoutUserInput, goodIdeaUncheckedCreateWithoutUserInput> | goodIdeaCreateWithoutUserInput[] | goodIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: goodIdeaCreateOrConnectWithoutUserInput | goodIdeaCreateOrConnectWithoutUserInput[]
    createMany?: goodIdeaCreateManyUserInputEnvelope
    connect?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
  }

  export type badIdeaCreateNestedManyWithoutUserInput = {
    create?: XOR<badIdeaCreateWithoutUserInput, badIdeaUncheckedCreateWithoutUserInput> | badIdeaCreateWithoutUserInput[] | badIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: badIdeaCreateOrConnectWithoutUserInput | badIdeaCreateOrConnectWithoutUserInput[]
    createMany?: badIdeaCreateManyUserInputEnvelope
    connect?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
  }

  export type interestCreateNestedManyWithoutUserInput = {
    create?: XOR<interestCreateWithoutUserInput, interestUncheckedCreateWithoutUserInput> | interestCreateWithoutUserInput[] | interestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: interestCreateOrConnectWithoutUserInput | interestCreateOrConnectWithoutUserInput[]
    createMany?: interestCreateManyUserInputEnvelope
    connect?: interestWhereUniqueInput | interestWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatGroupUserCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatGroupUserCreateWithoutUserInput, ChatGroupUserUncheckedCreateWithoutUserInput> | ChatGroupUserCreateWithoutUserInput[] | ChatGroupUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatGroupUserCreateOrConnectWithoutUserInput | ChatGroupUserCreateOrConnectWithoutUserInput[]
    createMany?: ChatGroupUserCreateManyUserInputEnvelope
    connect?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
  }

  export type InvitationCreateNestedManyWithoutSenderInput = {
    create?: XOR<InvitationCreateWithoutSenderInput, InvitationUncheckedCreateWithoutSenderInput> | InvitationCreateWithoutSenderInput[] | InvitationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutSenderInput | InvitationCreateOrConnectWithoutSenderInput[]
    createMany?: InvitationCreateManySenderInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type goodIdeaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<goodIdeaCreateWithoutUserInput, goodIdeaUncheckedCreateWithoutUserInput> | goodIdeaCreateWithoutUserInput[] | goodIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: goodIdeaCreateOrConnectWithoutUserInput | goodIdeaCreateOrConnectWithoutUserInput[]
    createMany?: goodIdeaCreateManyUserInputEnvelope
    connect?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
  }

  export type badIdeaUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<badIdeaCreateWithoutUserInput, badIdeaUncheckedCreateWithoutUserInput> | badIdeaCreateWithoutUserInput[] | badIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: badIdeaCreateOrConnectWithoutUserInput | badIdeaCreateOrConnectWithoutUserInput[]
    createMany?: badIdeaCreateManyUserInputEnvelope
    connect?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
  }

  export type interestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<interestCreateWithoutUserInput, interestUncheckedCreateWithoutUserInput> | interestCreateWithoutUserInput[] | interestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: interestCreateOrConnectWithoutUserInput | interestCreateOrConnectWithoutUserInput[]
    createMany?: interestCreateManyUserInputEnvelope
    connect?: interestWhereUniqueInput | interestWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatGroupUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatGroupUserCreateWithoutUserInput, ChatGroupUserUncheckedCreateWithoutUserInput> | ChatGroupUserCreateWithoutUserInput[] | ChatGroupUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatGroupUserCreateOrConnectWithoutUserInput | ChatGroupUserCreateOrConnectWithoutUserInput[]
    createMany?: ChatGroupUserCreateManyUserInputEnvelope
    connect?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<InvitationCreateWithoutSenderInput, InvitationUncheckedCreateWithoutSenderInput> | InvitationCreateWithoutSenderInput[] | InvitationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutSenderInput | InvitationCreateOrConnectWithoutSenderInput[]
    createMany?: InvitationCreateManySenderInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type UserUpdatedomainsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateprogrammingLanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type goodIdeaUpdateManyWithoutUserNestedInput = {
    create?: XOR<goodIdeaCreateWithoutUserInput, goodIdeaUncheckedCreateWithoutUserInput> | goodIdeaCreateWithoutUserInput[] | goodIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: goodIdeaCreateOrConnectWithoutUserInput | goodIdeaCreateOrConnectWithoutUserInput[]
    upsert?: goodIdeaUpsertWithWhereUniqueWithoutUserInput | goodIdeaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: goodIdeaCreateManyUserInputEnvelope
    set?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
    disconnect?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
    delete?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
    connect?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
    update?: goodIdeaUpdateWithWhereUniqueWithoutUserInput | goodIdeaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: goodIdeaUpdateManyWithWhereWithoutUserInput | goodIdeaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: goodIdeaScalarWhereInput | goodIdeaScalarWhereInput[]
  }

  export type badIdeaUpdateManyWithoutUserNestedInput = {
    create?: XOR<badIdeaCreateWithoutUserInput, badIdeaUncheckedCreateWithoutUserInput> | badIdeaCreateWithoutUserInput[] | badIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: badIdeaCreateOrConnectWithoutUserInput | badIdeaCreateOrConnectWithoutUserInput[]
    upsert?: badIdeaUpsertWithWhereUniqueWithoutUserInput | badIdeaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: badIdeaCreateManyUserInputEnvelope
    set?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
    disconnect?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
    delete?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
    connect?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
    update?: badIdeaUpdateWithWhereUniqueWithoutUserInput | badIdeaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: badIdeaUpdateManyWithWhereWithoutUserInput | badIdeaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: badIdeaScalarWhereInput | badIdeaScalarWhereInput[]
  }

  export type interestUpdateManyWithoutUserNestedInput = {
    create?: XOR<interestCreateWithoutUserInput, interestUncheckedCreateWithoutUserInput> | interestCreateWithoutUserInput[] | interestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: interestCreateOrConnectWithoutUserInput | interestCreateOrConnectWithoutUserInput[]
    upsert?: interestUpsertWithWhereUniqueWithoutUserInput | interestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: interestCreateManyUserInputEnvelope
    set?: interestWhereUniqueInput | interestWhereUniqueInput[]
    disconnect?: interestWhereUniqueInput | interestWhereUniqueInput[]
    delete?: interestWhereUniqueInput | interestWhereUniqueInput[]
    connect?: interestWhereUniqueInput | interestWhereUniqueInput[]
    update?: interestUpdateWithWhereUniqueWithoutUserInput | interestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: interestUpdateManyWithWhereWithoutUserInput | interestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: interestScalarWhereInput | interestScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput | ChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatGroupUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatGroupUserCreateWithoutUserInput, ChatGroupUserUncheckedCreateWithoutUserInput> | ChatGroupUserCreateWithoutUserInput[] | ChatGroupUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatGroupUserCreateOrConnectWithoutUserInput | ChatGroupUserCreateOrConnectWithoutUserInput[]
    upsert?: ChatGroupUserUpsertWithWhereUniqueWithoutUserInput | ChatGroupUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatGroupUserCreateManyUserInputEnvelope
    set?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
    disconnect?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
    delete?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
    connect?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
    update?: ChatGroupUserUpdateWithWhereUniqueWithoutUserInput | ChatGroupUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatGroupUserUpdateManyWithWhereWithoutUserInput | ChatGroupUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatGroupUserScalarWhereInput | ChatGroupUserScalarWhereInput[]
  }

  export type InvitationUpdateManyWithoutSenderNestedInput = {
    create?: XOR<InvitationCreateWithoutSenderInput, InvitationUncheckedCreateWithoutSenderInput> | InvitationCreateWithoutSenderInput[] | InvitationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutSenderInput | InvitationCreateOrConnectWithoutSenderInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutSenderInput | InvitationUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: InvitationCreateManySenderInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutSenderInput | InvitationUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutSenderInput | InvitationUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type goodIdeaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<goodIdeaCreateWithoutUserInput, goodIdeaUncheckedCreateWithoutUserInput> | goodIdeaCreateWithoutUserInput[] | goodIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: goodIdeaCreateOrConnectWithoutUserInput | goodIdeaCreateOrConnectWithoutUserInput[]
    upsert?: goodIdeaUpsertWithWhereUniqueWithoutUserInput | goodIdeaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: goodIdeaCreateManyUserInputEnvelope
    set?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
    disconnect?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
    delete?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
    connect?: goodIdeaWhereUniqueInput | goodIdeaWhereUniqueInput[]
    update?: goodIdeaUpdateWithWhereUniqueWithoutUserInput | goodIdeaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: goodIdeaUpdateManyWithWhereWithoutUserInput | goodIdeaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: goodIdeaScalarWhereInput | goodIdeaScalarWhereInput[]
  }

  export type badIdeaUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<badIdeaCreateWithoutUserInput, badIdeaUncheckedCreateWithoutUserInput> | badIdeaCreateWithoutUserInput[] | badIdeaUncheckedCreateWithoutUserInput[]
    connectOrCreate?: badIdeaCreateOrConnectWithoutUserInput | badIdeaCreateOrConnectWithoutUserInput[]
    upsert?: badIdeaUpsertWithWhereUniqueWithoutUserInput | badIdeaUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: badIdeaCreateManyUserInputEnvelope
    set?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
    disconnect?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
    delete?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
    connect?: badIdeaWhereUniqueInput | badIdeaWhereUniqueInput[]
    update?: badIdeaUpdateWithWhereUniqueWithoutUserInput | badIdeaUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: badIdeaUpdateManyWithWhereWithoutUserInput | badIdeaUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: badIdeaScalarWhereInput | badIdeaScalarWhereInput[]
  }

  export type interestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<interestCreateWithoutUserInput, interestUncheckedCreateWithoutUserInput> | interestCreateWithoutUserInput[] | interestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: interestCreateOrConnectWithoutUserInput | interestCreateOrConnectWithoutUserInput[]
    upsert?: interestUpsertWithWhereUniqueWithoutUserInput | interestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: interestCreateManyUserInputEnvelope
    set?: interestWhereUniqueInput | interestWhereUniqueInput[]
    disconnect?: interestWhereUniqueInput | interestWhereUniqueInput[]
    delete?: interestWhereUniqueInput | interestWhereUniqueInput[]
    connect?: interestWhereUniqueInput | interestWhereUniqueInput[]
    update?: interestUpdateWithWhereUniqueWithoutUserInput | interestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: interestUpdateManyWithWhereWithoutUserInput | interestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: interestScalarWhereInput | interestScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput | ChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatGroupUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatGroupUserCreateWithoutUserInput, ChatGroupUserUncheckedCreateWithoutUserInput> | ChatGroupUserCreateWithoutUserInput[] | ChatGroupUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatGroupUserCreateOrConnectWithoutUserInput | ChatGroupUserCreateOrConnectWithoutUserInput[]
    upsert?: ChatGroupUserUpsertWithWhereUniqueWithoutUserInput | ChatGroupUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatGroupUserCreateManyUserInputEnvelope
    set?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
    disconnect?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
    delete?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
    connect?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
    update?: ChatGroupUserUpdateWithWhereUniqueWithoutUserInput | ChatGroupUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatGroupUserUpdateManyWithWhereWithoutUserInput | ChatGroupUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatGroupUserScalarWhereInput | ChatGroupUserScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<InvitationCreateWithoutSenderInput, InvitationUncheckedCreateWithoutSenderInput> | InvitationCreateWithoutSenderInput[] | InvitationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutSenderInput | InvitationCreateOrConnectWithoutSenderInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutSenderInput | InvitationUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: InvitationCreateManySenderInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutSenderInput | InvitationUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutSenderInput | InvitationUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatGroupCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatGroupCreateWithoutMessagesInput, ChatGroupUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutMessagesInput
    connect?: ChatGroupWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatGroupUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatGroupCreateWithoutMessagesInput, ChatGroupUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutMessagesInput
    upsert?: ChatGroupUpsertWithoutMessagesInput
    connect?: ChatGroupWhereUniqueInput
    update?: XOR<XOR<ChatGroupUpdateToOneWithWhereWithoutMessagesInput, ChatGroupUpdateWithoutMessagesInput>, ChatGroupUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatGroupUserCreateNestedManyWithoutChatGroupInput = {
    create?: XOR<ChatGroupUserCreateWithoutChatGroupInput, ChatGroupUserUncheckedCreateWithoutChatGroupInput> | ChatGroupUserCreateWithoutChatGroupInput[] | ChatGroupUserUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: ChatGroupUserCreateOrConnectWithoutChatGroupInput | ChatGroupUserCreateOrConnectWithoutChatGroupInput[]
    createMany?: ChatGroupUserCreateManyChatGroupInputEnvelope
    connect?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutChatGroupInput = {
    create?: XOR<ChatMessageCreateWithoutChatGroupInput, ChatMessageUncheckedCreateWithoutChatGroupInput> | ChatMessageCreateWithoutChatGroupInput[] | ChatMessageUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatGroupInput | ChatMessageCreateOrConnectWithoutChatGroupInput[]
    createMany?: ChatMessageCreateManyChatGroupInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type InvitationCreateNestedManyWithoutChatGroupInput = {
    create?: XOR<InvitationCreateWithoutChatGroupInput, InvitationUncheckedCreateWithoutChatGroupInput> | InvitationCreateWithoutChatGroupInput[] | InvitationUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutChatGroupInput | InvitationCreateOrConnectWithoutChatGroupInput[]
    createMany?: InvitationCreateManyChatGroupInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type PostCreateNestedOneWithoutChatGroupInput = {
    create?: XOR<PostCreateWithoutChatGroupInput, PostUncheckedCreateWithoutChatGroupInput>
    connectOrCreate?: PostCreateOrConnectWithoutChatGroupInput
    connect?: PostWhereUniqueInput
  }

  export type ChatGroupUserUncheckedCreateNestedManyWithoutChatGroupInput = {
    create?: XOR<ChatGroupUserCreateWithoutChatGroupInput, ChatGroupUserUncheckedCreateWithoutChatGroupInput> | ChatGroupUserCreateWithoutChatGroupInput[] | ChatGroupUserUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: ChatGroupUserCreateOrConnectWithoutChatGroupInput | ChatGroupUserCreateOrConnectWithoutChatGroupInput[]
    createMany?: ChatGroupUserCreateManyChatGroupInputEnvelope
    connect?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutChatGroupInput = {
    create?: XOR<ChatMessageCreateWithoutChatGroupInput, ChatMessageUncheckedCreateWithoutChatGroupInput> | ChatMessageCreateWithoutChatGroupInput[] | ChatMessageUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatGroupInput | ChatMessageCreateOrConnectWithoutChatGroupInput[]
    createMany?: ChatMessageCreateManyChatGroupInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutChatGroupInput = {
    create?: XOR<InvitationCreateWithoutChatGroupInput, InvitationUncheckedCreateWithoutChatGroupInput> | InvitationCreateWithoutChatGroupInput[] | InvitationUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutChatGroupInput | InvitationCreateOrConnectWithoutChatGroupInput[]
    createMany?: InvitationCreateManyChatGroupInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type ChatGroupUserUpdateManyWithoutChatGroupNestedInput = {
    create?: XOR<ChatGroupUserCreateWithoutChatGroupInput, ChatGroupUserUncheckedCreateWithoutChatGroupInput> | ChatGroupUserCreateWithoutChatGroupInput[] | ChatGroupUserUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: ChatGroupUserCreateOrConnectWithoutChatGroupInput | ChatGroupUserCreateOrConnectWithoutChatGroupInput[]
    upsert?: ChatGroupUserUpsertWithWhereUniqueWithoutChatGroupInput | ChatGroupUserUpsertWithWhereUniqueWithoutChatGroupInput[]
    createMany?: ChatGroupUserCreateManyChatGroupInputEnvelope
    set?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
    disconnect?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
    delete?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
    connect?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
    update?: ChatGroupUserUpdateWithWhereUniqueWithoutChatGroupInput | ChatGroupUserUpdateWithWhereUniqueWithoutChatGroupInput[]
    updateMany?: ChatGroupUserUpdateManyWithWhereWithoutChatGroupInput | ChatGroupUserUpdateManyWithWhereWithoutChatGroupInput[]
    deleteMany?: ChatGroupUserScalarWhereInput | ChatGroupUserScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutChatGroupNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatGroupInput, ChatMessageUncheckedCreateWithoutChatGroupInput> | ChatMessageCreateWithoutChatGroupInput[] | ChatMessageUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatGroupInput | ChatMessageCreateOrConnectWithoutChatGroupInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatGroupInput | ChatMessageUpsertWithWhereUniqueWithoutChatGroupInput[]
    createMany?: ChatMessageCreateManyChatGroupInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatGroupInput | ChatMessageUpdateWithWhereUniqueWithoutChatGroupInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatGroupInput | ChatMessageUpdateManyWithWhereWithoutChatGroupInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type InvitationUpdateManyWithoutChatGroupNestedInput = {
    create?: XOR<InvitationCreateWithoutChatGroupInput, InvitationUncheckedCreateWithoutChatGroupInput> | InvitationCreateWithoutChatGroupInput[] | InvitationUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutChatGroupInput | InvitationCreateOrConnectWithoutChatGroupInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutChatGroupInput | InvitationUpsertWithWhereUniqueWithoutChatGroupInput[]
    createMany?: InvitationCreateManyChatGroupInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutChatGroupInput | InvitationUpdateWithWhereUniqueWithoutChatGroupInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutChatGroupInput | InvitationUpdateManyWithWhereWithoutChatGroupInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type PostUpdateOneRequiredWithoutChatGroupNestedInput = {
    create?: XOR<PostCreateWithoutChatGroupInput, PostUncheckedCreateWithoutChatGroupInput>
    connectOrCreate?: PostCreateOrConnectWithoutChatGroupInput
    upsert?: PostUpsertWithoutChatGroupInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutChatGroupInput, PostUpdateWithoutChatGroupInput>, PostUncheckedUpdateWithoutChatGroupInput>
  }

  export type ChatGroupUserUncheckedUpdateManyWithoutChatGroupNestedInput = {
    create?: XOR<ChatGroupUserCreateWithoutChatGroupInput, ChatGroupUserUncheckedCreateWithoutChatGroupInput> | ChatGroupUserCreateWithoutChatGroupInput[] | ChatGroupUserUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: ChatGroupUserCreateOrConnectWithoutChatGroupInput | ChatGroupUserCreateOrConnectWithoutChatGroupInput[]
    upsert?: ChatGroupUserUpsertWithWhereUniqueWithoutChatGroupInput | ChatGroupUserUpsertWithWhereUniqueWithoutChatGroupInput[]
    createMany?: ChatGroupUserCreateManyChatGroupInputEnvelope
    set?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
    disconnect?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
    delete?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
    connect?: ChatGroupUserWhereUniqueInput | ChatGroupUserWhereUniqueInput[]
    update?: ChatGroupUserUpdateWithWhereUniqueWithoutChatGroupInput | ChatGroupUserUpdateWithWhereUniqueWithoutChatGroupInput[]
    updateMany?: ChatGroupUserUpdateManyWithWhereWithoutChatGroupInput | ChatGroupUserUpdateManyWithWhereWithoutChatGroupInput[]
    deleteMany?: ChatGroupUserScalarWhereInput | ChatGroupUserScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatGroupNestedInput = {
    create?: XOR<ChatMessageCreateWithoutChatGroupInput, ChatMessageUncheckedCreateWithoutChatGroupInput> | ChatMessageCreateWithoutChatGroupInput[] | ChatMessageUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutChatGroupInput | ChatMessageCreateOrConnectWithoutChatGroupInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatGroupInput | ChatMessageUpsertWithWhereUniqueWithoutChatGroupInput[]
    createMany?: ChatMessageCreateManyChatGroupInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutChatGroupInput | ChatMessageUpdateWithWhereUniqueWithoutChatGroupInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutChatGroupInput | ChatMessageUpdateManyWithWhereWithoutChatGroupInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutChatGroupNestedInput = {
    create?: XOR<InvitationCreateWithoutChatGroupInput, InvitationUncheckedCreateWithoutChatGroupInput> | InvitationCreateWithoutChatGroupInput[] | InvitationUncheckedCreateWithoutChatGroupInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutChatGroupInput | InvitationCreateOrConnectWithoutChatGroupInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutChatGroupInput | InvitationUpsertWithWhereUniqueWithoutChatGroupInput[]
    createMany?: InvitationCreateManyChatGroupInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutChatGroupInput | InvitationUpdateWithWhereUniqueWithoutChatGroupInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutChatGroupInput | InvitationUpdateManyWithWhereWithoutChatGroupInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChatGroupsInput = {
    create?: XOR<UserCreateWithoutChatGroupsInput, UserUncheckedCreateWithoutChatGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatGroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<ChatGroupCreateWithoutMembersInput, ChatGroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutMembersInput
    connect?: ChatGroupWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChatGroupsNestedInput = {
    create?: XOR<UserCreateWithoutChatGroupsInput, UserUncheckedCreateWithoutChatGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatGroupsInput
    upsert?: UserUpsertWithoutChatGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatGroupsInput, UserUpdateWithoutChatGroupsInput>, UserUncheckedUpdateWithoutChatGroupsInput>
  }

  export type ChatGroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ChatGroupCreateWithoutMembersInput, ChatGroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutMembersInput
    upsert?: ChatGroupUpsertWithoutMembersInput
    connect?: ChatGroupWhereUniqueInput
    update?: XOR<XOR<ChatGroupUpdateToOneWithWhereWithoutMembersInput, ChatGroupUpdateWithoutMembersInput>, ChatGroupUncheckedUpdateWithoutMembersInput>
  }

  export type UserCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatGroupCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<ChatGroupCreateWithoutInvitationsInput, ChatGroupUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutInvitationsInput
    connect?: ChatGroupWhereUniqueInput
  }

  export type interestCreateNestedOneWithoutInvitationInput = {
    create?: XOR<interestCreateWithoutInvitationInput, interestUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: interestCreateOrConnectWithoutInvitationInput
    connect?: interestWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsInput
    upsert?: UserUpsertWithoutInvitationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitationsInput, UserUpdateWithoutInvitationsInput>, UserUncheckedUpdateWithoutInvitationsInput>
  }

  export type ChatGroupUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<ChatGroupCreateWithoutInvitationsInput, ChatGroupUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: ChatGroupCreateOrConnectWithoutInvitationsInput
    upsert?: ChatGroupUpsertWithoutInvitationsInput
    connect?: ChatGroupWhereUniqueInput
    update?: XOR<XOR<ChatGroupUpdateToOneWithWhereWithoutInvitationsInput, ChatGroupUpdateWithoutInvitationsInput>, ChatGroupUncheckedUpdateWithoutInvitationsInput>
  }

  export type interestUpdateOneRequiredWithoutInvitationNestedInput = {
    create?: XOR<interestCreateWithoutInvitationInput, interestUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: interestCreateOrConnectWithoutInvitationInput
    upsert?: interestUpsertWithoutInvitationInput
    connect?: interestWhereUniqueInput
    update?: XOR<XOR<interestUpdateToOneWithWhereWithoutInvitationInput, interestUpdateWithoutInvitationInput>, interestUncheckedUpdateWithoutInvitationInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    email: string
    firstName: string
    secondName?: string | null
    country: string
    educationExperience: string
    domains?: UserCreatedomainsInput | string[]
    profilePicture?: string | null
    programmingLanguages?: UserCreateprogrammingLanguagesInput | string[]
    biography?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goodIdeas?: goodIdeaCreateNestedManyWithoutUserInput
    badIdeas?: badIdeaCreateNestedManyWithoutUserInput
    interests?: interestCreateNestedManyWithoutUserInput
    messages?: ChatMessageCreateNestedManyWithoutSenderInput
    chatGroups?: ChatGroupUserCreateNestedManyWithoutUserInput
    Invitations?: InvitationCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    email: string
    firstName: string
    secondName?: string | null
    country: string
    educationExperience: string
    domains?: UserCreatedomainsInput | string[]
    profilePicture?: string | null
    programmingLanguages?: UserCreateprogrammingLanguagesInput | string[]
    biography?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    goodIdeas?: goodIdeaUncheckedCreateNestedManyWithoutUserInput
    badIdeas?: badIdeaUncheckedCreateNestedManyWithoutUserInput
    interests?: interestUncheckedCreateNestedManyWithoutUserInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    chatGroups?: ChatGroupUserUncheckedCreateNestedManyWithoutUserInput
    Invitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type interestCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInterestsInput
    invitation?: InvitationCreateNestedManyWithoutInterestInput
  }

  export type interestUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invitation?: InvitationUncheckedCreateNestedManyWithoutInterestInput
  }

  export type interestCreateOrConnectWithoutPostInput = {
    where: interestWhereUniqueInput
    create: XOR<interestCreateWithoutPostInput, interestUncheckedCreateWithoutPostInput>
  }

  export type interestCreateManyPostInputEnvelope = {
    data: interestCreateManyPostInput | interestCreateManyPostInput[]
  }

  export type goodIdeaCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGoodIdeasInput
  }

  export type goodIdeaUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type goodIdeaCreateOrConnectWithoutPostInput = {
    where: goodIdeaWhereUniqueInput
    create: XOR<goodIdeaCreateWithoutPostInput, goodIdeaUncheckedCreateWithoutPostInput>
  }

  export type goodIdeaCreateManyPostInputEnvelope = {
    data: goodIdeaCreateManyPostInput | goodIdeaCreateManyPostInput[]
  }

  export type badIdeaCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBadIdeasInput
  }

  export type badIdeaUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type badIdeaCreateOrConnectWithoutPostInput = {
    where: badIdeaWhereUniqueInput
    create: XOR<badIdeaCreateWithoutPostInput, badIdeaUncheckedCreateWithoutPostInput>
  }

  export type badIdeaCreateManyPostInputEnvelope = {
    data: badIdeaCreateManyPostInput | badIdeaCreateManyPostInput[]
  }

  export type ChatGroupCreateWithoutPostInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatGroupUserCreateNestedManyWithoutChatGroupInput
    messages?: ChatMessageCreateNestedManyWithoutChatGroupInput
    invitations?: InvitationCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupUncheckedCreateWithoutPostInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatGroupUserUncheckedCreateNestedManyWithoutChatGroupInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatGroupInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupCreateOrConnectWithoutPostInput = {
    where: ChatGroupWhereUniqueInput
    create: XOR<ChatGroupCreateWithoutPostInput, ChatGroupUncheckedCreateWithoutPostInput>
  }

  export type ChatGroupCreateManyPostInputEnvelope = {
    data: ChatGroupCreateManyPostInput | ChatGroupCreateManyPostInput[]
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    educationExperience?: StringFieldUpdateOperationsInput | string
    domains?: UserUpdatedomainsInput | string[]
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    programmingLanguages?: UserUpdateprogrammingLanguagesInput | string[]
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goodIdeas?: goodIdeaUpdateManyWithoutUserNestedInput
    badIdeas?: badIdeaUpdateManyWithoutUserNestedInput
    interests?: interestUpdateManyWithoutUserNestedInput
    messages?: ChatMessageUpdateManyWithoutSenderNestedInput
    chatGroups?: ChatGroupUserUpdateManyWithoutUserNestedInput
    Invitations?: InvitationUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    educationExperience?: StringFieldUpdateOperationsInput | string
    domains?: UserUpdatedomainsInput | string[]
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    programmingLanguages?: UserUpdateprogrammingLanguagesInput | string[]
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goodIdeas?: goodIdeaUncheckedUpdateManyWithoutUserNestedInput
    badIdeas?: badIdeaUncheckedUpdateManyWithoutUserNestedInput
    interests?: interestUncheckedUpdateManyWithoutUserNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    chatGroups?: ChatGroupUserUncheckedUpdateManyWithoutUserNestedInput
    Invitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type interestUpsertWithWhereUniqueWithoutPostInput = {
    where: interestWhereUniqueInput
    update: XOR<interestUpdateWithoutPostInput, interestUncheckedUpdateWithoutPostInput>
    create: XOR<interestCreateWithoutPostInput, interestUncheckedCreateWithoutPostInput>
  }

  export type interestUpdateWithWhereUniqueWithoutPostInput = {
    where: interestWhereUniqueInput
    data: XOR<interestUpdateWithoutPostInput, interestUncheckedUpdateWithoutPostInput>
  }

  export type interestUpdateManyWithWhereWithoutPostInput = {
    where: interestScalarWhereInput
    data: XOR<interestUpdateManyMutationInput, interestUncheckedUpdateManyWithoutPostInput>
  }

  export type interestScalarWhereInput = {
    AND?: interestScalarWhereInput | interestScalarWhereInput[]
    OR?: interestScalarWhereInput[]
    NOT?: interestScalarWhereInput | interestScalarWhereInput[]
    id?: StringFilter<"interest"> | string
    postId?: StringFilter<"interest"> | string
    userId?: StringFilter<"interest"> | string
    createdAt?: DateTimeFilter<"interest"> | Date | string
    updatedAt?: DateTimeFilter<"interest"> | Date | string
  }

  export type goodIdeaUpsertWithWhereUniqueWithoutPostInput = {
    where: goodIdeaWhereUniqueInput
    update: XOR<goodIdeaUpdateWithoutPostInput, goodIdeaUncheckedUpdateWithoutPostInput>
    create: XOR<goodIdeaCreateWithoutPostInput, goodIdeaUncheckedCreateWithoutPostInput>
  }

  export type goodIdeaUpdateWithWhereUniqueWithoutPostInput = {
    where: goodIdeaWhereUniqueInput
    data: XOR<goodIdeaUpdateWithoutPostInput, goodIdeaUncheckedUpdateWithoutPostInput>
  }

  export type goodIdeaUpdateManyWithWhereWithoutPostInput = {
    where: goodIdeaScalarWhereInput
    data: XOR<goodIdeaUpdateManyMutationInput, goodIdeaUncheckedUpdateManyWithoutPostInput>
  }

  export type goodIdeaScalarWhereInput = {
    AND?: goodIdeaScalarWhereInput | goodIdeaScalarWhereInput[]
    OR?: goodIdeaScalarWhereInput[]
    NOT?: goodIdeaScalarWhereInput | goodIdeaScalarWhereInput[]
    id?: StringFilter<"goodIdea"> | string
    postId?: StringFilter<"goodIdea"> | string
    userId?: StringFilter<"goodIdea"> | string
    createdAt?: DateTimeFilter<"goodIdea"> | Date | string
    updatedAt?: DateTimeFilter<"goodIdea"> | Date | string
  }

  export type badIdeaUpsertWithWhereUniqueWithoutPostInput = {
    where: badIdeaWhereUniqueInput
    update: XOR<badIdeaUpdateWithoutPostInput, badIdeaUncheckedUpdateWithoutPostInput>
    create: XOR<badIdeaCreateWithoutPostInput, badIdeaUncheckedCreateWithoutPostInput>
  }

  export type badIdeaUpdateWithWhereUniqueWithoutPostInput = {
    where: badIdeaWhereUniqueInput
    data: XOR<badIdeaUpdateWithoutPostInput, badIdeaUncheckedUpdateWithoutPostInput>
  }

  export type badIdeaUpdateManyWithWhereWithoutPostInput = {
    where: badIdeaScalarWhereInput
    data: XOR<badIdeaUpdateManyMutationInput, badIdeaUncheckedUpdateManyWithoutPostInput>
  }

  export type badIdeaScalarWhereInput = {
    AND?: badIdeaScalarWhereInput | badIdeaScalarWhereInput[]
    OR?: badIdeaScalarWhereInput[]
    NOT?: badIdeaScalarWhereInput | badIdeaScalarWhereInput[]
    id?: StringFilter<"badIdea"> | string
    postId?: StringFilter<"badIdea"> | string
    userId?: StringFilter<"badIdea"> | string
    createdAt?: DateTimeFilter<"badIdea"> | Date | string
    updatedAt?: DateTimeFilter<"badIdea"> | Date | string
  }

  export type ChatGroupUpsertWithWhereUniqueWithoutPostInput = {
    where: ChatGroupWhereUniqueInput
    update: XOR<ChatGroupUpdateWithoutPostInput, ChatGroupUncheckedUpdateWithoutPostInput>
    create: XOR<ChatGroupCreateWithoutPostInput, ChatGroupUncheckedCreateWithoutPostInput>
  }

  export type ChatGroupUpdateWithWhereUniqueWithoutPostInput = {
    where: ChatGroupWhereUniqueInput
    data: XOR<ChatGroupUpdateWithoutPostInput, ChatGroupUncheckedUpdateWithoutPostInput>
  }

  export type ChatGroupUpdateManyWithWhereWithoutPostInput = {
    where: ChatGroupScalarWhereInput
    data: XOR<ChatGroupUpdateManyMutationInput, ChatGroupUncheckedUpdateManyWithoutPostInput>
  }

  export type ChatGroupScalarWhereInput = {
    AND?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
    OR?: ChatGroupScalarWhereInput[]
    NOT?: ChatGroupScalarWhereInput | ChatGroupScalarWhereInput[]
    id?: StringFilter<"ChatGroup"> | string
    name?: StringFilter<"ChatGroup"> | string
    postId?: StringFilter<"ChatGroup"> | string
    createdAt?: DateTimeFilter<"ChatGroup"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroup"> | Date | string
  }

  export type PostCreateWithoutGoodIdeasInput = {
    id?: string
    title: string
    body: string
    programmingLanguages?: PostCreateprogrammingLanguagesInput | string[]
    domains?: PostCreatedomainsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    interests?: interestCreateNestedManyWithoutPostInput
    badIdeas?: badIdeaCreateNestedManyWithoutPostInput
    chatGroup?: ChatGroupCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutGoodIdeasInput = {
    id?: string
    title: string
    body: string
    userId: string
    programmingLanguages?: PostCreateprogrammingLanguagesInput | string[]
    domains?: PostCreatedomainsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    interests?: interestUncheckedCreateNestedManyWithoutPostInput
    badIdeas?: badIdeaUncheckedCreateNestedManyWithoutPostInput
    chatGroup?: ChatGroupUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutGoodIdeasInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutGoodIdeasInput, PostUncheckedCreateWithoutGoodIdeasInput>
  }

  export type UserCreateWithoutGoodIdeasInput = {
    id?: string
    email: string
    firstName: string
    secondName?: string | null
    country: string
    educationExperience: string
    domains?: UserCreatedomainsInput | string[]
    profilePicture?: string | null
    programmingLanguages?: UserCreateprogrammingLanguagesInput | string[]
    biography?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    badIdeas?: badIdeaCreateNestedManyWithoutUserInput
    interests?: interestCreateNestedManyWithoutUserInput
    messages?: ChatMessageCreateNestedManyWithoutSenderInput
    chatGroups?: ChatGroupUserCreateNestedManyWithoutUserInput
    Invitations?: InvitationCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutGoodIdeasInput = {
    id?: string
    email: string
    firstName: string
    secondName?: string | null
    country: string
    educationExperience: string
    domains?: UserCreatedomainsInput | string[]
    profilePicture?: string | null
    programmingLanguages?: UserCreateprogrammingLanguagesInput | string[]
    biography?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    badIdeas?: badIdeaUncheckedCreateNestedManyWithoutUserInput
    interests?: interestUncheckedCreateNestedManyWithoutUserInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    chatGroups?: ChatGroupUserUncheckedCreateNestedManyWithoutUserInput
    Invitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutGoodIdeasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoodIdeasInput, UserUncheckedCreateWithoutGoodIdeasInput>
  }

  export type PostUpsertWithoutGoodIdeasInput = {
    update: XOR<PostUpdateWithoutGoodIdeasInput, PostUncheckedUpdateWithoutGoodIdeasInput>
    create: XOR<PostCreateWithoutGoodIdeasInput, PostUncheckedCreateWithoutGoodIdeasInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutGoodIdeasInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutGoodIdeasInput, PostUncheckedUpdateWithoutGoodIdeasInput>
  }

  export type PostUpdateWithoutGoodIdeasInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    programmingLanguages?: PostUpdateprogrammingLanguagesInput | string[]
    domains?: PostUpdatedomainsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    interests?: interestUpdateManyWithoutPostNestedInput
    badIdeas?: badIdeaUpdateManyWithoutPostNestedInput
    chatGroup?: ChatGroupUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutGoodIdeasInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    programmingLanguages?: PostUpdateprogrammingLanguagesInput | string[]
    domains?: PostUpdatedomainsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: interestUncheckedUpdateManyWithoutPostNestedInput
    badIdeas?: badIdeaUncheckedUpdateManyWithoutPostNestedInput
    chatGroup?: ChatGroupUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutGoodIdeasInput = {
    update: XOR<UserUpdateWithoutGoodIdeasInput, UserUncheckedUpdateWithoutGoodIdeasInput>
    create: XOR<UserCreateWithoutGoodIdeasInput, UserUncheckedCreateWithoutGoodIdeasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoodIdeasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoodIdeasInput, UserUncheckedUpdateWithoutGoodIdeasInput>
  }

  export type UserUpdateWithoutGoodIdeasInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    educationExperience?: StringFieldUpdateOperationsInput | string
    domains?: UserUpdatedomainsInput | string[]
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    programmingLanguages?: UserUpdateprogrammingLanguagesInput | string[]
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    badIdeas?: badIdeaUpdateManyWithoutUserNestedInput
    interests?: interestUpdateManyWithoutUserNestedInput
    messages?: ChatMessageUpdateManyWithoutSenderNestedInput
    chatGroups?: ChatGroupUserUpdateManyWithoutUserNestedInput
    Invitations?: InvitationUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutGoodIdeasInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    educationExperience?: StringFieldUpdateOperationsInput | string
    domains?: UserUpdatedomainsInput | string[]
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    programmingLanguages?: UserUpdateprogrammingLanguagesInput | string[]
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    badIdeas?: badIdeaUncheckedUpdateManyWithoutUserNestedInput
    interests?: interestUncheckedUpdateManyWithoutUserNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    chatGroups?: ChatGroupUserUncheckedUpdateManyWithoutUserNestedInput
    Invitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type PostCreateWithoutBadIdeasInput = {
    id?: string
    title: string
    body: string
    programmingLanguages?: PostCreateprogrammingLanguagesInput | string[]
    domains?: PostCreatedomainsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    interests?: interestCreateNestedManyWithoutPostInput
    goodIdeas?: goodIdeaCreateNestedManyWithoutPostInput
    chatGroup?: ChatGroupCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutBadIdeasInput = {
    id?: string
    title: string
    body: string
    userId: string
    programmingLanguages?: PostCreateprogrammingLanguagesInput | string[]
    domains?: PostCreatedomainsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    interests?: interestUncheckedCreateNestedManyWithoutPostInput
    goodIdeas?: goodIdeaUncheckedCreateNestedManyWithoutPostInput
    chatGroup?: ChatGroupUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutBadIdeasInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutBadIdeasInput, PostUncheckedCreateWithoutBadIdeasInput>
  }

  export type UserCreateWithoutBadIdeasInput = {
    id?: string
    email: string
    firstName: string
    secondName?: string | null
    country: string
    educationExperience: string
    domains?: UserCreatedomainsInput | string[]
    profilePicture?: string | null
    programmingLanguages?: UserCreateprogrammingLanguagesInput | string[]
    biography?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    goodIdeas?: goodIdeaCreateNestedManyWithoutUserInput
    interests?: interestCreateNestedManyWithoutUserInput
    messages?: ChatMessageCreateNestedManyWithoutSenderInput
    chatGroups?: ChatGroupUserCreateNestedManyWithoutUserInput
    Invitations?: InvitationCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutBadIdeasInput = {
    id?: string
    email: string
    firstName: string
    secondName?: string | null
    country: string
    educationExperience: string
    domains?: UserCreatedomainsInput | string[]
    profilePicture?: string | null
    programmingLanguages?: UserCreateprogrammingLanguagesInput | string[]
    biography?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    goodIdeas?: goodIdeaUncheckedCreateNestedManyWithoutUserInput
    interests?: interestUncheckedCreateNestedManyWithoutUserInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    chatGroups?: ChatGroupUserUncheckedCreateNestedManyWithoutUserInput
    Invitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutBadIdeasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBadIdeasInput, UserUncheckedCreateWithoutBadIdeasInput>
  }

  export type PostUpsertWithoutBadIdeasInput = {
    update: XOR<PostUpdateWithoutBadIdeasInput, PostUncheckedUpdateWithoutBadIdeasInput>
    create: XOR<PostCreateWithoutBadIdeasInput, PostUncheckedCreateWithoutBadIdeasInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutBadIdeasInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutBadIdeasInput, PostUncheckedUpdateWithoutBadIdeasInput>
  }

  export type PostUpdateWithoutBadIdeasInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    programmingLanguages?: PostUpdateprogrammingLanguagesInput | string[]
    domains?: PostUpdatedomainsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    interests?: interestUpdateManyWithoutPostNestedInput
    goodIdeas?: goodIdeaUpdateManyWithoutPostNestedInput
    chatGroup?: ChatGroupUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutBadIdeasInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    programmingLanguages?: PostUpdateprogrammingLanguagesInput | string[]
    domains?: PostUpdatedomainsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: interestUncheckedUpdateManyWithoutPostNestedInput
    goodIdeas?: goodIdeaUncheckedUpdateManyWithoutPostNestedInput
    chatGroup?: ChatGroupUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutBadIdeasInput = {
    update: XOR<UserUpdateWithoutBadIdeasInput, UserUncheckedUpdateWithoutBadIdeasInput>
    create: XOR<UserCreateWithoutBadIdeasInput, UserUncheckedCreateWithoutBadIdeasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBadIdeasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBadIdeasInput, UserUncheckedUpdateWithoutBadIdeasInput>
  }

  export type UserUpdateWithoutBadIdeasInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    educationExperience?: StringFieldUpdateOperationsInput | string
    domains?: UserUpdatedomainsInput | string[]
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    programmingLanguages?: UserUpdateprogrammingLanguagesInput | string[]
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    goodIdeas?: goodIdeaUpdateManyWithoutUserNestedInput
    interests?: interestUpdateManyWithoutUserNestedInput
    messages?: ChatMessageUpdateManyWithoutSenderNestedInput
    chatGroups?: ChatGroupUserUpdateManyWithoutUserNestedInput
    Invitations?: InvitationUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutBadIdeasInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    educationExperience?: StringFieldUpdateOperationsInput | string
    domains?: UserUpdatedomainsInput | string[]
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    programmingLanguages?: UserUpdateprogrammingLanguagesInput | string[]
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    goodIdeas?: goodIdeaUncheckedUpdateManyWithoutUserNestedInput
    interests?: interestUncheckedUpdateManyWithoutUserNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    chatGroups?: ChatGroupUserUncheckedUpdateManyWithoutUserNestedInput
    Invitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type PostCreateWithoutInterestsInput = {
    id?: string
    title: string
    body: string
    programmingLanguages?: PostCreateprogrammingLanguagesInput | string[]
    domains?: PostCreatedomainsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    goodIdeas?: goodIdeaCreateNestedManyWithoutPostInput
    badIdeas?: badIdeaCreateNestedManyWithoutPostInput
    chatGroup?: ChatGroupCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutInterestsInput = {
    id?: string
    title: string
    body: string
    userId: string
    programmingLanguages?: PostCreateprogrammingLanguagesInput | string[]
    domains?: PostCreatedomainsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    goodIdeas?: goodIdeaUncheckedCreateNestedManyWithoutPostInput
    badIdeas?: badIdeaUncheckedCreateNestedManyWithoutPostInput
    chatGroup?: ChatGroupUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutInterestsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutInterestsInput, PostUncheckedCreateWithoutInterestsInput>
  }

  export type UserCreateWithoutInterestsInput = {
    id?: string
    email: string
    firstName: string
    secondName?: string | null
    country: string
    educationExperience: string
    domains?: UserCreatedomainsInput | string[]
    profilePicture?: string | null
    programmingLanguages?: UserCreateprogrammingLanguagesInput | string[]
    biography?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    goodIdeas?: goodIdeaCreateNestedManyWithoutUserInput
    badIdeas?: badIdeaCreateNestedManyWithoutUserInput
    messages?: ChatMessageCreateNestedManyWithoutSenderInput
    chatGroups?: ChatGroupUserCreateNestedManyWithoutUserInput
    Invitations?: InvitationCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutInterestsInput = {
    id?: string
    email: string
    firstName: string
    secondName?: string | null
    country: string
    educationExperience: string
    domains?: UserCreatedomainsInput | string[]
    profilePicture?: string | null
    programmingLanguages?: UserCreateprogrammingLanguagesInput | string[]
    biography?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    goodIdeas?: goodIdeaUncheckedCreateNestedManyWithoutUserInput
    badIdeas?: badIdeaUncheckedCreateNestedManyWithoutUserInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    chatGroups?: ChatGroupUserUncheckedCreateNestedManyWithoutUserInput
    Invitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutInterestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
  }

  export type InvitationCreateWithoutInterestInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutInvitationsInput
    chatGroup: ChatGroupCreateNestedOneWithoutInvitationsInput
  }

  export type InvitationUncheckedCreateWithoutInterestInput = {
    id?: string
    senderId: string
    chatGroupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateOrConnectWithoutInterestInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutInterestInput, InvitationUncheckedCreateWithoutInterestInput>
  }

  export type InvitationCreateManyInterestInputEnvelope = {
    data: InvitationCreateManyInterestInput | InvitationCreateManyInterestInput[]
  }

  export type PostUpsertWithoutInterestsInput = {
    update: XOR<PostUpdateWithoutInterestsInput, PostUncheckedUpdateWithoutInterestsInput>
    create: XOR<PostCreateWithoutInterestsInput, PostUncheckedCreateWithoutInterestsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutInterestsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutInterestsInput, PostUncheckedUpdateWithoutInterestsInput>
  }

  export type PostUpdateWithoutInterestsInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    programmingLanguages?: PostUpdateprogrammingLanguagesInput | string[]
    domains?: PostUpdatedomainsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    goodIdeas?: goodIdeaUpdateManyWithoutPostNestedInput
    badIdeas?: badIdeaUpdateManyWithoutPostNestedInput
    chatGroup?: ChatGroupUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutInterestsInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    programmingLanguages?: PostUpdateprogrammingLanguagesInput | string[]
    domains?: PostUpdatedomainsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goodIdeas?: goodIdeaUncheckedUpdateManyWithoutPostNestedInput
    badIdeas?: badIdeaUncheckedUpdateManyWithoutPostNestedInput
    chatGroup?: ChatGroupUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutInterestsInput = {
    update: XOR<UserUpdateWithoutInterestsInput, UserUncheckedUpdateWithoutInterestsInput>
    create: XOR<UserCreateWithoutInterestsInput, UserUncheckedCreateWithoutInterestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInterestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInterestsInput, UserUncheckedUpdateWithoutInterestsInput>
  }

  export type UserUpdateWithoutInterestsInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    educationExperience?: StringFieldUpdateOperationsInput | string
    domains?: UserUpdatedomainsInput | string[]
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    programmingLanguages?: UserUpdateprogrammingLanguagesInput | string[]
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    goodIdeas?: goodIdeaUpdateManyWithoutUserNestedInput
    badIdeas?: badIdeaUpdateManyWithoutUserNestedInput
    messages?: ChatMessageUpdateManyWithoutSenderNestedInput
    chatGroups?: ChatGroupUserUpdateManyWithoutUserNestedInput
    Invitations?: InvitationUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutInterestsInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    educationExperience?: StringFieldUpdateOperationsInput | string
    domains?: UserUpdatedomainsInput | string[]
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    programmingLanguages?: UserUpdateprogrammingLanguagesInput | string[]
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    goodIdeas?: goodIdeaUncheckedUpdateManyWithoutUserNestedInput
    badIdeas?: badIdeaUncheckedUpdateManyWithoutUserNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    chatGroups?: ChatGroupUserUncheckedUpdateManyWithoutUserNestedInput
    Invitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type InvitationUpsertWithWhereUniqueWithoutInterestInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutInterestInput, InvitationUncheckedUpdateWithoutInterestInput>
    create: XOR<InvitationCreateWithoutInterestInput, InvitationUncheckedCreateWithoutInterestInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutInterestInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutInterestInput, InvitationUncheckedUpdateWithoutInterestInput>
  }

  export type InvitationUpdateManyWithWhereWithoutInterestInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutInterestInput>
  }

  export type InvitationScalarWhereInput = {
    AND?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    OR?: InvitationScalarWhereInput[]
    NOT?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    id?: StringFilter<"Invitation"> | string
    senderId?: StringFilter<"Invitation"> | string
    chatGroupId?: StringFilter<"Invitation"> | string
    interestId?: StringFilter<"Invitation"> | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
  }

  export type PostCreateWithoutUserInput = {
    id?: string
    title: string
    body: string
    programmingLanguages?: PostCreateprogrammingLanguagesInput | string[]
    domains?: PostCreatedomainsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    interests?: interestCreateNestedManyWithoutPostInput
    goodIdeas?: goodIdeaCreateNestedManyWithoutPostInput
    badIdeas?: badIdeaCreateNestedManyWithoutPostInput
    chatGroup?: ChatGroupCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    body: string
    programmingLanguages?: PostCreateprogrammingLanguagesInput | string[]
    domains?: PostCreatedomainsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    interests?: interestUncheckedCreateNestedManyWithoutPostInput
    goodIdeas?: goodIdeaUncheckedCreateNestedManyWithoutPostInput
    badIdeas?: badIdeaUncheckedCreateNestedManyWithoutPostInput
    chatGroup?: ChatGroupUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
  }

  export type goodIdeaCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutGoodIdeasInput
  }

  export type goodIdeaUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type goodIdeaCreateOrConnectWithoutUserInput = {
    where: goodIdeaWhereUniqueInput
    create: XOR<goodIdeaCreateWithoutUserInput, goodIdeaUncheckedCreateWithoutUserInput>
  }

  export type goodIdeaCreateManyUserInputEnvelope = {
    data: goodIdeaCreateManyUserInput | goodIdeaCreateManyUserInput[]
  }

  export type badIdeaCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutBadIdeasInput
  }

  export type badIdeaUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type badIdeaCreateOrConnectWithoutUserInput = {
    where: badIdeaWhereUniqueInput
    create: XOR<badIdeaCreateWithoutUserInput, badIdeaUncheckedCreateWithoutUserInput>
  }

  export type badIdeaCreateManyUserInputEnvelope = {
    data: badIdeaCreateManyUserInput | badIdeaCreateManyUserInput[]
  }

  export type interestCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutInterestsInput
    invitation?: InvitationCreateNestedManyWithoutInterestInput
  }

  export type interestUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    invitation?: InvitationUncheckedCreateNestedManyWithoutInterestInput
  }

  export type interestCreateOrConnectWithoutUserInput = {
    where: interestWhereUniqueInput
    create: XOR<interestCreateWithoutUserInput, interestUncheckedCreateWithoutUserInput>
  }

  export type interestCreateManyUserInputEnvelope = {
    data: interestCreateManyUserInput | interestCreateManyUserInput[]
  }

  export type ChatMessageCreateWithoutSenderInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chatGroup: ChatGroupCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    chatGroupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type ChatMessageCreateManySenderInputEnvelope = {
    data: ChatMessageCreateManySenderInput | ChatMessageCreateManySenderInput[]
  }

  export type ChatGroupUserCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chatGroup: ChatGroupCreateNestedOneWithoutMembersInput
  }

  export type ChatGroupUserUncheckedCreateWithoutUserInput = {
    id?: string
    chatGroupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupUserCreateOrConnectWithoutUserInput = {
    where: ChatGroupUserWhereUniqueInput
    create: XOR<ChatGroupUserCreateWithoutUserInput, ChatGroupUserUncheckedCreateWithoutUserInput>
  }

  export type ChatGroupUserCreateManyUserInputEnvelope = {
    data: ChatGroupUserCreateManyUserInput | ChatGroupUserCreateManyUserInput[]
  }

  export type InvitationCreateWithoutSenderInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    chatGroup: ChatGroupCreateNestedOneWithoutInvitationsInput
    interest: interestCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutSenderInput = {
    id?: string
    chatGroupId: string
    interestId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateOrConnectWithoutSenderInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutSenderInput, InvitationUncheckedCreateWithoutSenderInput>
  }

  export type InvitationCreateManySenderInputEnvelope = {
    data: InvitationCreateManySenderInput | InvitationCreateManySenderInput[]
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    body?: StringFilter<"Post"> | string
    userId?: StringFilter<"Post"> | string
    programmingLanguages?: StringNullableListFilter<"Post">
    domains?: StringNullableListFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type goodIdeaUpsertWithWhereUniqueWithoutUserInput = {
    where: goodIdeaWhereUniqueInput
    update: XOR<goodIdeaUpdateWithoutUserInput, goodIdeaUncheckedUpdateWithoutUserInput>
    create: XOR<goodIdeaCreateWithoutUserInput, goodIdeaUncheckedCreateWithoutUserInput>
  }

  export type goodIdeaUpdateWithWhereUniqueWithoutUserInput = {
    where: goodIdeaWhereUniqueInput
    data: XOR<goodIdeaUpdateWithoutUserInput, goodIdeaUncheckedUpdateWithoutUserInput>
  }

  export type goodIdeaUpdateManyWithWhereWithoutUserInput = {
    where: goodIdeaScalarWhereInput
    data: XOR<goodIdeaUpdateManyMutationInput, goodIdeaUncheckedUpdateManyWithoutUserInput>
  }

  export type badIdeaUpsertWithWhereUniqueWithoutUserInput = {
    where: badIdeaWhereUniqueInput
    update: XOR<badIdeaUpdateWithoutUserInput, badIdeaUncheckedUpdateWithoutUserInput>
    create: XOR<badIdeaCreateWithoutUserInput, badIdeaUncheckedCreateWithoutUserInput>
  }

  export type badIdeaUpdateWithWhereUniqueWithoutUserInput = {
    where: badIdeaWhereUniqueInput
    data: XOR<badIdeaUpdateWithoutUserInput, badIdeaUncheckedUpdateWithoutUserInput>
  }

  export type badIdeaUpdateManyWithWhereWithoutUserInput = {
    where: badIdeaScalarWhereInput
    data: XOR<badIdeaUpdateManyMutationInput, badIdeaUncheckedUpdateManyWithoutUserInput>
  }

  export type interestUpsertWithWhereUniqueWithoutUserInput = {
    where: interestWhereUniqueInput
    update: XOR<interestUpdateWithoutUserInput, interestUncheckedUpdateWithoutUserInput>
    create: XOR<interestCreateWithoutUserInput, interestUncheckedCreateWithoutUserInput>
  }

  export type interestUpdateWithWhereUniqueWithoutUserInput = {
    where: interestWhereUniqueInput
    data: XOR<interestUpdateWithoutUserInput, interestUncheckedUpdateWithoutUserInput>
  }

  export type interestUpdateManyWithWhereWithoutUserInput = {
    where: interestScalarWhereInput
    data: XOR<interestUpdateManyMutationInput, interestUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutSenderInput, ChatMessageUncheckedUpdateWithoutSenderInput>
    create: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutSenderInput, ChatMessageUncheckedUpdateWithoutSenderInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutSenderInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    chatGroupId?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatGroupUserUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatGroupUserWhereUniqueInput
    update: XOR<ChatGroupUserUpdateWithoutUserInput, ChatGroupUserUncheckedUpdateWithoutUserInput>
    create: XOR<ChatGroupUserCreateWithoutUserInput, ChatGroupUserUncheckedCreateWithoutUserInput>
  }

  export type ChatGroupUserUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatGroupUserWhereUniqueInput
    data: XOR<ChatGroupUserUpdateWithoutUserInput, ChatGroupUserUncheckedUpdateWithoutUserInput>
  }

  export type ChatGroupUserUpdateManyWithWhereWithoutUserInput = {
    where: ChatGroupUserScalarWhereInput
    data: XOR<ChatGroupUserUpdateManyMutationInput, ChatGroupUserUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatGroupUserScalarWhereInput = {
    AND?: ChatGroupUserScalarWhereInput | ChatGroupUserScalarWhereInput[]
    OR?: ChatGroupUserScalarWhereInput[]
    NOT?: ChatGroupUserScalarWhereInput | ChatGroupUserScalarWhereInput[]
    id?: StringFilter<"ChatGroupUser"> | string
    userId?: StringFilter<"ChatGroupUser"> | string
    chatGroupId?: StringFilter<"ChatGroupUser"> | string
    createdAt?: DateTimeFilter<"ChatGroupUser"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGroupUser"> | Date | string
  }

  export type InvitationUpsertWithWhereUniqueWithoutSenderInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutSenderInput, InvitationUncheckedUpdateWithoutSenderInput>
    create: XOR<InvitationCreateWithoutSenderInput, InvitationUncheckedCreateWithoutSenderInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutSenderInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutSenderInput, InvitationUncheckedUpdateWithoutSenderInput>
  }

  export type InvitationUpdateManyWithWhereWithoutSenderInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutSenderInput>
  }

  export type UserCreateWithoutMessagesInput = {
    id?: string
    email: string
    firstName: string
    secondName?: string | null
    country: string
    educationExperience: string
    domains?: UserCreatedomainsInput | string[]
    profilePicture?: string | null
    programmingLanguages?: UserCreateprogrammingLanguagesInput | string[]
    biography?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    goodIdeas?: goodIdeaCreateNestedManyWithoutUserInput
    badIdeas?: badIdeaCreateNestedManyWithoutUserInput
    interests?: interestCreateNestedManyWithoutUserInput
    chatGroups?: ChatGroupUserCreateNestedManyWithoutUserInput
    Invitations?: InvitationCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id?: string
    email: string
    firstName: string
    secondName?: string | null
    country: string
    educationExperience: string
    domains?: UserCreatedomainsInput | string[]
    profilePicture?: string | null
    programmingLanguages?: UserCreateprogrammingLanguagesInput | string[]
    biography?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    goodIdeas?: goodIdeaUncheckedCreateNestedManyWithoutUserInput
    badIdeas?: badIdeaUncheckedCreateNestedManyWithoutUserInput
    interests?: interestUncheckedCreateNestedManyWithoutUserInput
    chatGroups?: ChatGroupUserUncheckedCreateNestedManyWithoutUserInput
    Invitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type ChatGroupCreateWithoutMessagesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatGroupUserCreateNestedManyWithoutChatGroupInput
    invitations?: InvitationCreateNestedManyWithoutChatGroupInput
    post: PostCreateNestedOneWithoutChatGroupInput
  }

  export type ChatGroupUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatGroupUserUncheckedCreateNestedManyWithoutChatGroupInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupCreateOrConnectWithoutMessagesInput = {
    where: ChatGroupWhereUniqueInput
    create: XOR<ChatGroupCreateWithoutMessagesInput, ChatGroupUncheckedCreateWithoutMessagesInput>
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
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    educationExperience?: StringFieldUpdateOperationsInput | string
    domains?: UserUpdatedomainsInput | string[]
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    programmingLanguages?: UserUpdateprogrammingLanguagesInput | string[]
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    goodIdeas?: goodIdeaUpdateManyWithoutUserNestedInput
    badIdeas?: badIdeaUpdateManyWithoutUserNestedInput
    interests?: interestUpdateManyWithoutUserNestedInput
    chatGroups?: ChatGroupUserUpdateManyWithoutUserNestedInput
    Invitations?: InvitationUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    educationExperience?: StringFieldUpdateOperationsInput | string
    domains?: UserUpdatedomainsInput | string[]
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    programmingLanguages?: UserUpdateprogrammingLanguagesInput | string[]
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    goodIdeas?: goodIdeaUncheckedUpdateManyWithoutUserNestedInput
    badIdeas?: badIdeaUncheckedUpdateManyWithoutUserNestedInput
    interests?: interestUncheckedUpdateManyWithoutUserNestedInput
    chatGroups?: ChatGroupUserUncheckedUpdateManyWithoutUserNestedInput
    Invitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ChatGroupUpsertWithoutMessagesInput = {
    update: XOR<ChatGroupUpdateWithoutMessagesInput, ChatGroupUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatGroupCreateWithoutMessagesInput, ChatGroupUncheckedCreateWithoutMessagesInput>
    where?: ChatGroupWhereInput
  }

  export type ChatGroupUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatGroupWhereInput
    data: XOR<ChatGroupUpdateWithoutMessagesInput, ChatGroupUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatGroupUpdateWithoutMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatGroupUserUpdateManyWithoutChatGroupNestedInput
    invitations?: InvitationUpdateManyWithoutChatGroupNestedInput
    post?: PostUpdateOneRequiredWithoutChatGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateWithoutMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatGroupUserUncheckedUpdateManyWithoutChatGroupNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutChatGroupNestedInput
  }

  export type ChatGroupUserCreateWithoutChatGroupInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutChatGroupsInput
  }

  export type ChatGroupUserUncheckedCreateWithoutChatGroupInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupUserCreateOrConnectWithoutChatGroupInput = {
    where: ChatGroupUserWhereUniqueInput
    create: XOR<ChatGroupUserCreateWithoutChatGroupInput, ChatGroupUserUncheckedCreateWithoutChatGroupInput>
  }

  export type ChatGroupUserCreateManyChatGroupInputEnvelope = {
    data: ChatGroupUserCreateManyChatGroupInput | ChatGroupUserCreateManyChatGroupInput[]
  }

  export type ChatMessageCreateWithoutChatGroupInput = {
    id?: string
    content: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutChatGroupInput = {
    id?: string
    content: string
    senderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutChatGroupInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutChatGroupInput, ChatMessageUncheckedCreateWithoutChatGroupInput>
  }

  export type ChatMessageCreateManyChatGroupInputEnvelope = {
    data: ChatMessageCreateManyChatGroupInput | ChatMessageCreateManyChatGroupInput[]
  }

  export type InvitationCreateWithoutChatGroupInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutInvitationsInput
    interest: interestCreateNestedOneWithoutInvitationInput
  }

  export type InvitationUncheckedCreateWithoutChatGroupInput = {
    id?: string
    senderId: string
    interestId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateOrConnectWithoutChatGroupInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutChatGroupInput, InvitationUncheckedCreateWithoutChatGroupInput>
  }

  export type InvitationCreateManyChatGroupInputEnvelope = {
    data: InvitationCreateManyChatGroupInput | InvitationCreateManyChatGroupInput[]
  }

  export type PostCreateWithoutChatGroupInput = {
    id?: string
    title: string
    body: string
    programmingLanguages?: PostCreateprogrammingLanguagesInput | string[]
    domains?: PostCreatedomainsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPostsInput
    interests?: interestCreateNestedManyWithoutPostInput
    goodIdeas?: goodIdeaCreateNestedManyWithoutPostInput
    badIdeas?: badIdeaCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutChatGroupInput = {
    id?: string
    title: string
    body: string
    userId: string
    programmingLanguages?: PostCreateprogrammingLanguagesInput | string[]
    domains?: PostCreatedomainsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    interests?: interestUncheckedCreateNestedManyWithoutPostInput
    goodIdeas?: goodIdeaUncheckedCreateNestedManyWithoutPostInput
    badIdeas?: badIdeaUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutChatGroupInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutChatGroupInput, PostUncheckedCreateWithoutChatGroupInput>
  }

  export type ChatGroupUserUpsertWithWhereUniqueWithoutChatGroupInput = {
    where: ChatGroupUserWhereUniqueInput
    update: XOR<ChatGroupUserUpdateWithoutChatGroupInput, ChatGroupUserUncheckedUpdateWithoutChatGroupInput>
    create: XOR<ChatGroupUserCreateWithoutChatGroupInput, ChatGroupUserUncheckedCreateWithoutChatGroupInput>
  }

  export type ChatGroupUserUpdateWithWhereUniqueWithoutChatGroupInput = {
    where: ChatGroupUserWhereUniqueInput
    data: XOR<ChatGroupUserUpdateWithoutChatGroupInput, ChatGroupUserUncheckedUpdateWithoutChatGroupInput>
  }

  export type ChatGroupUserUpdateManyWithWhereWithoutChatGroupInput = {
    where: ChatGroupUserScalarWhereInput
    data: XOR<ChatGroupUserUpdateManyMutationInput, ChatGroupUserUncheckedUpdateManyWithoutChatGroupInput>
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutChatGroupInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutChatGroupInput, ChatMessageUncheckedUpdateWithoutChatGroupInput>
    create: XOR<ChatMessageCreateWithoutChatGroupInput, ChatMessageUncheckedCreateWithoutChatGroupInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutChatGroupInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutChatGroupInput, ChatMessageUncheckedUpdateWithoutChatGroupInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutChatGroupInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutChatGroupInput>
  }

  export type InvitationUpsertWithWhereUniqueWithoutChatGroupInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutChatGroupInput, InvitationUncheckedUpdateWithoutChatGroupInput>
    create: XOR<InvitationCreateWithoutChatGroupInput, InvitationUncheckedCreateWithoutChatGroupInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutChatGroupInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutChatGroupInput, InvitationUncheckedUpdateWithoutChatGroupInput>
  }

  export type InvitationUpdateManyWithWhereWithoutChatGroupInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutChatGroupInput>
  }

  export type PostUpsertWithoutChatGroupInput = {
    update: XOR<PostUpdateWithoutChatGroupInput, PostUncheckedUpdateWithoutChatGroupInput>
    create: XOR<PostCreateWithoutChatGroupInput, PostUncheckedCreateWithoutChatGroupInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutChatGroupInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutChatGroupInput, PostUncheckedUpdateWithoutChatGroupInput>
  }

  export type PostUpdateWithoutChatGroupInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    programmingLanguages?: PostUpdateprogrammingLanguagesInput | string[]
    domains?: PostUpdatedomainsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
    interests?: interestUpdateManyWithoutPostNestedInput
    goodIdeas?: goodIdeaUpdateManyWithoutPostNestedInput
    badIdeas?: badIdeaUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutChatGroupInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    programmingLanguages?: PostUpdateprogrammingLanguagesInput | string[]
    domains?: PostUpdatedomainsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: interestUncheckedUpdateManyWithoutPostNestedInput
    goodIdeas?: goodIdeaUncheckedUpdateManyWithoutPostNestedInput
    badIdeas?: badIdeaUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserCreateWithoutChatGroupsInput = {
    id?: string
    email: string
    firstName: string
    secondName?: string | null
    country: string
    educationExperience: string
    domains?: UserCreatedomainsInput | string[]
    profilePicture?: string | null
    programmingLanguages?: UserCreateprogrammingLanguagesInput | string[]
    biography?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    goodIdeas?: goodIdeaCreateNestedManyWithoutUserInput
    badIdeas?: badIdeaCreateNestedManyWithoutUserInput
    interests?: interestCreateNestedManyWithoutUserInput
    messages?: ChatMessageCreateNestedManyWithoutSenderInput
    Invitations?: InvitationCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutChatGroupsInput = {
    id?: string
    email: string
    firstName: string
    secondName?: string | null
    country: string
    educationExperience: string
    domains?: UserCreatedomainsInput | string[]
    profilePicture?: string | null
    programmingLanguages?: UserCreateprogrammingLanguagesInput | string[]
    biography?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    goodIdeas?: goodIdeaUncheckedCreateNestedManyWithoutUserInput
    badIdeas?: badIdeaUncheckedCreateNestedManyWithoutUserInput
    interests?: interestUncheckedCreateNestedManyWithoutUserInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    Invitations?: InvitationUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutChatGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatGroupsInput, UserUncheckedCreateWithoutChatGroupsInput>
  }

  export type ChatGroupCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageCreateNestedManyWithoutChatGroupInput
    invitations?: InvitationCreateNestedManyWithoutChatGroupInput
    post: PostCreateNestedOneWithoutChatGroupInput
  }

  export type ChatGroupUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatGroupInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupCreateOrConnectWithoutMembersInput = {
    where: ChatGroupWhereUniqueInput
    create: XOR<ChatGroupCreateWithoutMembersInput, ChatGroupUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutChatGroupsInput = {
    update: XOR<UserUpdateWithoutChatGroupsInput, UserUncheckedUpdateWithoutChatGroupsInput>
    create: XOR<UserCreateWithoutChatGroupsInput, UserUncheckedCreateWithoutChatGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatGroupsInput, UserUncheckedUpdateWithoutChatGroupsInput>
  }

  export type UserUpdateWithoutChatGroupsInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    educationExperience?: StringFieldUpdateOperationsInput | string
    domains?: UserUpdatedomainsInput | string[]
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    programmingLanguages?: UserUpdateprogrammingLanguagesInput | string[]
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    goodIdeas?: goodIdeaUpdateManyWithoutUserNestedInput
    badIdeas?: badIdeaUpdateManyWithoutUserNestedInput
    interests?: interestUpdateManyWithoutUserNestedInput
    messages?: ChatMessageUpdateManyWithoutSenderNestedInput
    Invitations?: InvitationUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutChatGroupsInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    educationExperience?: StringFieldUpdateOperationsInput | string
    domains?: UserUpdatedomainsInput | string[]
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    programmingLanguages?: UserUpdateprogrammingLanguagesInput | string[]
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    goodIdeas?: goodIdeaUncheckedUpdateManyWithoutUserNestedInput
    badIdeas?: badIdeaUncheckedUpdateManyWithoutUserNestedInput
    interests?: interestUncheckedUpdateManyWithoutUserNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    Invitations?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type ChatGroupUpsertWithoutMembersInput = {
    update: XOR<ChatGroupUpdateWithoutMembersInput, ChatGroupUncheckedUpdateWithoutMembersInput>
    create: XOR<ChatGroupCreateWithoutMembersInput, ChatGroupUncheckedCreateWithoutMembersInput>
    where?: ChatGroupWhereInput
  }

  export type ChatGroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: ChatGroupWhereInput
    data: XOR<ChatGroupUpdateWithoutMembersInput, ChatGroupUncheckedUpdateWithoutMembersInput>
  }

  export type ChatGroupUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUpdateManyWithoutChatGroupNestedInput
    invitations?: InvitationUpdateManyWithoutChatGroupNestedInput
    post?: PostUpdateOneRequiredWithoutChatGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutChatGroupNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutChatGroupNestedInput
  }

  export type UserCreateWithoutInvitationsInput = {
    id?: string
    email: string
    firstName: string
    secondName?: string | null
    country: string
    educationExperience: string
    domains?: UserCreatedomainsInput | string[]
    profilePicture?: string | null
    programmingLanguages?: UserCreateprogrammingLanguagesInput | string[]
    biography?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutUserInput
    goodIdeas?: goodIdeaCreateNestedManyWithoutUserInput
    badIdeas?: badIdeaCreateNestedManyWithoutUserInput
    interests?: interestCreateNestedManyWithoutUserInput
    messages?: ChatMessageCreateNestedManyWithoutSenderInput
    chatGroups?: ChatGroupUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInvitationsInput = {
    id?: string
    email: string
    firstName: string
    secondName?: string | null
    country: string
    educationExperience: string
    domains?: UserCreatedomainsInput | string[]
    profilePicture?: string | null
    programmingLanguages?: UserCreateprogrammingLanguagesInput | string[]
    biography?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    goodIdeas?: goodIdeaUncheckedCreateNestedManyWithoutUserInput
    badIdeas?: badIdeaUncheckedCreateNestedManyWithoutUserInput
    interests?: interestUncheckedCreateNestedManyWithoutUserInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    chatGroups?: ChatGroupUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInvitationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
  }

  export type ChatGroupCreateWithoutInvitationsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatGroupUserCreateNestedManyWithoutChatGroupInput
    messages?: ChatMessageCreateNestedManyWithoutChatGroupInput
    post: PostCreateNestedOneWithoutChatGroupInput
  }

  export type ChatGroupUncheckedCreateWithoutInvitationsInput = {
    id?: string
    name: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: ChatGroupUserUncheckedCreateNestedManyWithoutChatGroupInput
    messages?: ChatMessageUncheckedCreateNestedManyWithoutChatGroupInput
  }

  export type ChatGroupCreateOrConnectWithoutInvitationsInput = {
    where: ChatGroupWhereUniqueInput
    create: XOR<ChatGroupCreateWithoutInvitationsInput, ChatGroupUncheckedCreateWithoutInvitationsInput>
  }

  export type interestCreateWithoutInvitationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutInterestsInput
    user: UserCreateNestedOneWithoutInterestsInput
  }

  export type interestUncheckedCreateWithoutInvitationInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type interestCreateOrConnectWithoutInvitationInput = {
    where: interestWhereUniqueInput
    create: XOR<interestCreateWithoutInvitationInput, interestUncheckedCreateWithoutInvitationInput>
  }

  export type UserUpsertWithoutInvitationsInput = {
    update: XOR<UserUpdateWithoutInvitationsInput, UserUncheckedUpdateWithoutInvitationsInput>
    create: XOR<UserCreateWithoutInvitationsInput, UserUncheckedCreateWithoutInvitationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitationsInput, UserUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserUpdateWithoutInvitationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    educationExperience?: StringFieldUpdateOperationsInput | string
    domains?: UserUpdatedomainsInput | string[]
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    programmingLanguages?: UserUpdateprogrammingLanguagesInput | string[]
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutUserNestedInput
    goodIdeas?: goodIdeaUpdateManyWithoutUserNestedInput
    badIdeas?: badIdeaUpdateManyWithoutUserNestedInput
    interests?: interestUpdateManyWithoutUserNestedInput
    messages?: ChatMessageUpdateManyWithoutSenderNestedInput
    chatGroups?: ChatGroupUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    secondName?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    educationExperience?: StringFieldUpdateOperationsInput | string
    domains?: UserUpdatedomainsInput | string[]
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    programmingLanguages?: UserUpdateprogrammingLanguagesInput | string[]
    biography?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    goodIdeas?: goodIdeaUncheckedUpdateManyWithoutUserNestedInput
    badIdeas?: badIdeaUncheckedUpdateManyWithoutUserNestedInput
    interests?: interestUncheckedUpdateManyWithoutUserNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    chatGroups?: ChatGroupUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatGroupUpsertWithoutInvitationsInput = {
    update: XOR<ChatGroupUpdateWithoutInvitationsInput, ChatGroupUncheckedUpdateWithoutInvitationsInput>
    create: XOR<ChatGroupCreateWithoutInvitationsInput, ChatGroupUncheckedCreateWithoutInvitationsInput>
    where?: ChatGroupWhereInput
  }

  export type ChatGroupUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: ChatGroupWhereInput
    data: XOR<ChatGroupUpdateWithoutInvitationsInput, ChatGroupUncheckedUpdateWithoutInvitationsInput>
  }

  export type ChatGroupUpdateWithoutInvitationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatGroupUserUpdateManyWithoutChatGroupNestedInput
    messages?: ChatMessageUpdateManyWithoutChatGroupNestedInput
    post?: PostUpdateOneRequiredWithoutChatGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateWithoutInvitationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatGroupUserUncheckedUpdateManyWithoutChatGroupNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatGroupNestedInput
  }

  export type interestUpsertWithoutInvitationInput = {
    update: XOR<interestUpdateWithoutInvitationInput, interestUncheckedUpdateWithoutInvitationInput>
    create: XOR<interestCreateWithoutInvitationInput, interestUncheckedCreateWithoutInvitationInput>
    where?: interestWhereInput
  }

  export type interestUpdateToOneWithWhereWithoutInvitationInput = {
    where?: interestWhereInput
    data: XOR<interestUpdateWithoutInvitationInput, interestUncheckedUpdateWithoutInvitationInput>
  }

  export type interestUpdateWithoutInvitationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutInterestsNestedInput
    user?: UserUpdateOneRequiredWithoutInterestsNestedInput
  }

  export type interestUncheckedUpdateWithoutInvitationInput = {
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type interestCreateManyPostInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type goodIdeaCreateManyPostInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type badIdeaCreateManyPostInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupCreateManyPostInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type interestUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInterestsNestedInput
    invitation?: InvitationUpdateManyWithoutInterestNestedInput
  }

  export type interestUncheckedUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: InvitationUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type interestUncheckedUpdateManyWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goodIdeaUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGoodIdeasNestedInput
  }

  export type goodIdeaUncheckedUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goodIdeaUncheckedUpdateManyWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type badIdeaUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBadIdeasNestedInput
  }

  export type badIdeaUncheckedUpdateWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type badIdeaUncheckedUpdateManyWithoutPostInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupUpdateWithoutPostInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatGroupUserUpdateManyWithoutChatGroupNestedInput
    messages?: ChatMessageUpdateManyWithoutChatGroupNestedInput
    invitations?: InvitationUpdateManyWithoutChatGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateWithoutPostInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: ChatGroupUserUncheckedUpdateManyWithoutChatGroupNestedInput
    messages?: ChatMessageUncheckedUpdateManyWithoutChatGroupNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutChatGroupNestedInput
  }

  export type ChatGroupUncheckedUpdateManyWithoutPostInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateManyInterestInput = {
    id?: string
    senderId: string
    chatGroupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationUpdateWithoutInterestInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutInvitationsNestedInput
    chatGroup?: ChatGroupUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type InvitationUncheckedUpdateWithoutInterestInput = {
    senderId?: StringFieldUpdateOperationsInput | string
    chatGroupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyWithoutInterestInput = {
    senderId?: StringFieldUpdateOperationsInput | string
    chatGroupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyUserInput = {
    id?: string
    title: string
    body: string
    programmingLanguages?: PostCreateprogrammingLanguagesInput | string[]
    domains?: PostCreatedomainsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type goodIdeaCreateManyUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type badIdeaCreateManyUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type interestCreateManyUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateManySenderInput = {
    id?: string
    content: string
    chatGroupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupUserCreateManyUserInput = {
    id?: string
    chatGroupId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateManySenderInput = {
    id?: string
    chatGroupId: string
    interestId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    programmingLanguages?: PostUpdateprogrammingLanguagesInput | string[]
    domains?: PostUpdatedomainsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: interestUpdateManyWithoutPostNestedInput
    goodIdeas?: goodIdeaUpdateManyWithoutPostNestedInput
    badIdeas?: badIdeaUpdateManyWithoutPostNestedInput
    chatGroup?: ChatGroupUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    programmingLanguages?: PostUpdateprogrammingLanguagesInput | string[]
    domains?: PostUpdatedomainsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interests?: interestUncheckedUpdateManyWithoutPostNestedInput
    goodIdeas?: goodIdeaUncheckedUpdateManyWithoutPostNestedInput
    badIdeas?: badIdeaUncheckedUpdateManyWithoutPostNestedInput
    chatGroup?: ChatGroupUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    programmingLanguages?: PostUpdateprogrammingLanguagesInput | string[]
    domains?: PostUpdatedomainsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goodIdeaUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutGoodIdeasNestedInput
  }

  export type goodIdeaUncheckedUpdateWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type goodIdeaUncheckedUpdateManyWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type badIdeaUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutBadIdeasNestedInput
  }

  export type badIdeaUncheckedUpdateWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type badIdeaUncheckedUpdateManyWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type interestUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutInterestsNestedInput
    invitation?: InvitationUpdateManyWithoutInterestNestedInput
  }

  export type interestUncheckedUpdateWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invitation?: InvitationUncheckedUpdateManyWithoutInterestNestedInput
  }

  export type interestUncheckedUpdateManyWithoutUserInput = {
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatGroup?: ChatGroupUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    chatGroupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutSenderInput = {
    content?: StringFieldUpdateOperationsInput | string
    chatGroupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupUserUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatGroup?: ChatGroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ChatGroupUserUncheckedUpdateWithoutUserInput = {
    chatGroupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupUserUncheckedUpdateManyWithoutUserInput = {
    chatGroupId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUpdateWithoutSenderInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chatGroup?: ChatGroupUpdateOneRequiredWithoutInvitationsNestedInput
    interest?: interestUpdateOneRequiredWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutSenderInput = {
    chatGroupId?: StringFieldUpdateOperationsInput | string
    interestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyWithoutSenderInput = {
    chatGroupId?: StringFieldUpdateOperationsInput | string
    interestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupUserCreateManyChatGroupInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatMessageCreateManyChatGroupInput = {
    id?: string
    content: string
    senderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateManyChatGroupInput = {
    id?: string
    senderId: string
    interestId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGroupUserUpdateWithoutChatGroupInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutChatGroupsNestedInput
  }

  export type ChatGroupUserUncheckedUpdateWithoutChatGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGroupUserUncheckedUpdateManyWithoutChatGroupInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutChatGroupInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutChatGroupInput = {
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutChatGroupInput = {
    content?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUpdateWithoutChatGroupInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutInvitationsNestedInput
    interest?: interestUpdateOneRequiredWithoutInvitationNestedInput
  }

  export type InvitationUncheckedUpdateWithoutChatGroupInput = {
    senderId?: StringFieldUpdateOperationsInput | string
    interestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyWithoutChatGroupInput = {
    senderId?: StringFieldUpdateOperationsInput | string
    interestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PostCountOutputTypeDefaultArgs instead
     */
    export type PostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InterestCountOutputTypeDefaultArgs instead
     */
    export type InterestCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InterestCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatGroupCountOutputTypeDefaultArgs instead
     */
    export type ChatGroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatGroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostDefaultArgs instead
     */
    export type PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use goodIdeaDefaultArgs instead
     */
    export type goodIdeaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = goodIdeaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use badIdeaDefaultArgs instead
     */
    export type badIdeaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = badIdeaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use interestDefaultArgs instead
     */
    export type interestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = interestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatMessageDefaultArgs instead
     */
    export type ChatMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatGroupDefaultArgs instead
     */
    export type ChatGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatGroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatGroupUserDefaultArgs instead
     */
    export type ChatGroupUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ChatGroupUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InvitationDefaultArgs instead
     */
    export type InvitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InvitationDefaultArgs<ExtArgs>

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