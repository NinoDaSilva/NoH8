/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Authorigins = "_authOrigins",
	Externalauths = "_externalAuths",
	Mfas = "_mfas",
	Otps = "_otps",
	Superusers = "_superusers",
	Contact = "contact",
	Evidence = "evidence",
	Faq = "faq",
	Users = "users",
	Video = "video",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AuthoriginsRecord = {
	collectionRef: string
	created?: IsoDateString
	fingerprint: string
	id: string
	recordRef: string
	updated?: IsoDateString
}

export type ExternalauthsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	provider: string
	providerId: string
	recordRef: string
	updated?: IsoDateString
}

export type MfasRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	method: string
	recordRef: string
	updated?: IsoDateString
}

export type OtpsRecord = {
	collectionRef: string
	created?: IsoDateString
	id: string
	password: string
	recordRef: string
	sentTo?: string
	updated?: IsoDateString
}

export type SuperusersRecord = {
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	id: string
	password: string
	tokenKey: string
	updated?: IsoDateString
	verified?: boolean
}

export type ContactRecord = {
	description?: string
	id: string
	link?: string
	name?: string
}

export enum EvidenceTypeOptions {
	"victime" = "victime",
	"temoin" = "temoin",
	"autre" = "autre",
}
export type EvidenceRecord = {
	approuved?: boolean
	created?: IsoDateString
	description?: string
	id: string
	type?: EvidenceTypeOptions
}

export enum FaqCategoryOptions {
	"top" = "top",
	"all" = "all",
	"parent" = "parent",
	"pro" = "pro",
	"safe" = "safe",
}
export type FaqRecord = {
	category?: FaqCategoryOptions
	description?: string
	id: string
	title?: string
}

export type UsersRecord = {
	avatar?: string
	created?: IsoDateString
	email: string
	emailVisibility?: boolean
	id: string
	name?: string
	password: string
	tokenKey: string
	updated?: IsoDateString
	verified?: boolean
}

export enum VideoCategoryOptions {
	"parent" = "parent",
	"jeune" = "jeune",
	"prof" = "prof",
	"loi" = "loi",
	"temoignage" = "temoignage",
}
export type VideoRecord = {
	author?: string
	category?: VideoCategoryOptions
	description?: string
	id: string
	link?: string
	title?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AuthoriginsResponse<Texpand = unknown> = Required<AuthoriginsRecord> & BaseSystemFields<Texpand>
export type ExternalauthsResponse<Texpand = unknown> = Required<ExternalauthsRecord> & BaseSystemFields<Texpand>
export type MfasResponse<Texpand = unknown> = Required<MfasRecord> & BaseSystemFields<Texpand>
export type OtpsResponse<Texpand = unknown> = Required<OtpsRecord> & BaseSystemFields<Texpand>
export type SuperusersResponse<Texpand = unknown> = Required<SuperusersRecord> & AuthSystemFields<Texpand>
export type ContactResponse<Texpand = unknown> = Required<ContactRecord> & BaseSystemFields<Texpand>
export type EvidenceResponse<Texpand = unknown> = Required<EvidenceRecord> & BaseSystemFields<Texpand>
export type FaqResponse<Texpand = unknown> = Required<FaqRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>
export type VideoResponse<Texpand = unknown> = Required<VideoRecord> & BaseSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	_authOrigins: AuthoriginsRecord
	_externalAuths: ExternalauthsRecord
	_mfas: MfasRecord
	_otps: OtpsRecord
	_superusers: SuperusersRecord
	contact: ContactRecord
	evidence: EvidenceRecord
	faq: FaqRecord
	users: UsersRecord
	video: VideoRecord
}

export type CollectionResponses = {
	_authOrigins: AuthoriginsResponse
	_externalAuths: ExternalauthsResponse
	_mfas: MfasResponse
	_otps: OtpsResponse
	_superusers: SuperusersResponse
	contact: ContactResponse
	evidence: EvidenceResponse
	faq: FaqResponse
	users: UsersResponse
	video: VideoResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: '_authOrigins'): RecordService<AuthoriginsResponse>
	collection(idOrName: '_externalAuths'): RecordService<ExternalauthsResponse>
	collection(idOrName: '_mfas'): RecordService<MfasResponse>
	collection(idOrName: '_otps'): RecordService<OtpsResponse>
	collection(idOrName: '_superusers'): RecordService<SuperusersResponse>
	collection(idOrName: 'contact'): RecordService<ContactResponse>
	collection(idOrName: 'evidence'): RecordService<EvidenceResponse>
	collection(idOrName: 'faq'): RecordService<FaqResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
	collection(idOrName: 'video'): RecordService<VideoResponse>
}
