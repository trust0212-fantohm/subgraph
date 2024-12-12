import { Address, BigInt } from "@graphprotocol/graph-ts";
import { NFT, User } from "../../generated/schema";
import { NFTMinted } from "../../generated/NFT/NFT"
import { generateNFTId } from "../utils/helper";

const getUser = (address: Address): User => {
  let user = User.load(address.toHex());
  if (user == null) {
    user = new User(address.toHex());
    user.totalMintedNFTCount = 0;
    user.save();
  }
  return user;
};

const getNFT = (tokenId: BigInt): NFT => {
  let id = generateNFTId(tokenId);
  let nft = NFT.load(id);
  if (nft == null) {
    nft = new NFT(id)
    nft.tokenId = tokenId
  }

  return nft
}


export function handleNFTMint(event: NFTMinted): void {
  let owner = event.params.minter;
  let tokenId = event.params.tokenId;

  let user = getUser(owner);

  user.totalMintedNFTCount = user.totalMintedNFTCount + 1;

  let nft = getNFT(tokenId)
  nft.owner = user.id;

  nft.save();
  user.save();
}
