import { LaunchesQuery } from 'generatedTypes/graphql';

// workaround to avoid deal with nulls
export type Launch = Required<
  NonNullable<NonNullable<LaunchesQuery['launches']>[number]>
>;
