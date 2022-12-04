/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
  'query Launch($id: ID!) {\n  launch(id: $id) {\n    id\n    mission_name\n    details\n    links {\n      flickr_images\n      mission_patch_small\n      wikipedia\n      article_link\n      video_link\n    }\n    rocket {\n      rocket_name\n    }\n    launch_date_utc\n  }\n}':
    types.LaunchDocument,
  'query Launches($limit: Int, $missionName: String, $offset: Int) {\n  launches(limit: $limit, find: {mission_name: $missionName}, offset: $offset) {\n    id\n    mission_name\n    details\n    links {\n      flickr_images\n      mission_patch_small\n      wikipedia\n      article_link\n      video_link\n    }\n    rocket {\n      rocket_name\n    }\n    launch_date_utc\n  }\n}':
    types.LaunchesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Launch($id: ID!) {\n  launch(id: $id) {\n    id\n    mission_name\n    details\n    links {\n      flickr_images\n      mission_patch_small\n      wikipedia\n      article_link\n      video_link\n    }\n    rocket {\n      rocket_name\n    }\n    launch_date_utc\n  }\n}',
): typeof documents['query Launch($id: ID!) {\n  launch(id: $id) {\n    id\n    mission_name\n    details\n    links {\n      flickr_images\n      mission_patch_small\n      wikipedia\n      article_link\n      video_link\n    }\n    rocket {\n      rocket_name\n    }\n    launch_date_utc\n  }\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query Launches($limit: Int, $missionName: String, $offset: Int) {\n  launches(limit: $limit, find: {mission_name: $missionName}, offset: $offset) {\n    id\n    mission_name\n    details\n    links {\n      flickr_images\n      mission_patch_small\n      wikipedia\n      article_link\n      video_link\n    }\n    rocket {\n      rocket_name\n    }\n    launch_date_utc\n  }\n}',
): typeof documents['query Launches($limit: Int, $missionName: String, $offset: Int) {\n  launches(limit: $limit, find: {mission_name: $missionName}, offset: $offset) {\n    id\n    mission_name\n    details\n    links {\n      flickr_images\n      mission_patch_small\n      wikipedia\n      article_link\n      video_link\n    }\n    rocket {\n      rocket_name\n    }\n    launch_date_utc\n  }\n}'];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 **/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
