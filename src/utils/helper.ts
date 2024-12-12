import { BigInt } from "@graphprotocol/graph-ts";

export const generateNFTId = (
  tokenId: BigInt
): string => {
  return "NFT" + "/" + tokenId.toString();
};
