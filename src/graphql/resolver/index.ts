import { mergeResolvers } from "@graphql-tools/merge";
import carResolver from "./carResolver";

export default mergeResolvers([carResolver]);