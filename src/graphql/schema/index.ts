import { mergeTypeDefs } from '@graphql-tools/merge';
import carDefs from "./car";

export default mergeTypeDefs([carDefs])