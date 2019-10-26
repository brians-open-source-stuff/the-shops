[@the-shops/auth](../globals.md) › ["services/users"](_services_users_.md)

# External module: "services/users"

## Index

### Functions

* [createToken](_services_users_.md#const-createtoken)
* [findUserByUsername](_services_users_.md#const-finduserbyusername)
* [verifyUser](_services_users_.md#const-verifyuser)

## Functions

### `Const` createToken

▸ **createToken**(`user`: any): *Promise‹string›*

*Defined in [services/users.ts:31](https://github.com/brians-open-source-stuff/the-shops/blob/83bdb6e/auth/src/services/users.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`user` | any |

**Returns:** *Promise‹string›*

___

### `Const` findUserByUsername

▸ **findUserByUsername**(`username`: string): *Promise‹any›*

*Defined in [services/users.ts:5](https://github.com/brians-open-source-stuff/the-shops/blob/83bdb6e/auth/src/services/users.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`username` | string |

**Returns:** *Promise‹any›*

___

### `Const` verifyUser

▸ **verifyUser**(`user`: any, `password`: string): *Promise‹any›*

*Defined in [services/users.ts:20](https://github.com/brians-open-source-stuff/the-shops/blob/83bdb6e/auth/src/services/users.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`user` | any |
`password` | string |

**Returns:** *Promise‹any›*
