initSidebarItems({"enum":[["DefaultEnvironment","The fundamental types of the default configuration."],["Error","Errors that can be encountered upon environmental interaction."],["NoChainExtension","Placeholder for chains that have no defined chain extension."]],"fn":[["account_id","Returns the account ID of the executed contract."],["balance","Returns the balance of the executed contract."],["block_number","Returns the current block number."],["block_timestamp","Returns the current block timestamp."],["caller","Returns the address of the caller of the executed contract."],["clear_contract_storage","Clears the contract’s storage key entry."],["debug_message","Appends the given message to the debug message buffer."],["decode_input","Returns the execution input to the executed contract and decodes it as `T`."],["emit_event","Emits an event with the given event data."],["eval_contract","Evaluates a contract message and returns its result."],["gas_left","Returns the amount of gas left for the contract execution."],["get_contract_storage","Returns the value stored under the given key in the contract’s storage if any."],["hash_bytes","Conducts the crypto hash of the given input and stores the result in `output`."],["hash_encoded","Conducts the crypto hash of the given encoded input and stores the result in `output`."],["instantiate_contract","Instantiates another contract."],["invoke_contract","Invokes a contract message."],["minimum_balance","Returns the minimum balance that is required for creating an account."],["random","Returns a random hash seed and the block number since which it was determinable by chain observers."],["rent_allowance","Returns the current rent allowance for the executed contract."],["rent_params","Returns information needed for rent calculations."],["rent_status","Returns information about the required deposit and resulting rent."],["restore_contract","Restores a smart contract in tombstone state."],["return_value","Returns the value back to the caller of the executed contract."],["set_contract_storage","Writes the value to the contract storage under the given key."],["set_rent_allowance","Sets the rent allowance of the executed contract to the new value."],["terminate_contract","Terminates the existence of the currently executed smart contract without creating a tombstone."],["tombstone_deposit","Returns the tombstone deposit for the contracts chain."],["transfer","Transfers value from the contract to the destination account ID."],["transferred_balance","Returns the transferred balance for the contract execution."],["weight_to_fee","Returns the price for the specified amount of gas."]],"macro":[["debug_print","Appends a formatted string to the `debug_message` buffer which will be:"],["debug_println","Appends a formatted string to the `debug_message` buffer, as per [`debug_print`] but with a newline appended."]],"mod":[["call","Utilities to call or instantiate contracts on the chain."],["chain_extension","Definitions and utilities for calling chain extension methods."],["hash","Provides type definitions and traits for the built-in cryptographic hashes."],["test","Operations on the off-chain testing environment."]],"struct":[["AccountId","The default environment `AccountId` type."],["Hash","The default environment `Hash` type."],["Perbill","A fixed point representation of a number in the range [0, 1]."],["RentParams","Information needed for rent calculations that can be requested by a contract."],["RentStatus","Information about the required deposit and resulting rent."],["ReturnFlags","The flags to indicate further information about the end of a contract execution."]],"trait":[["Clear","The equivalent of `Zero` for hashes."],["Environment","The environmental types usable by contracts defined with ink!."],["Topics","Implemented by event types to guide the event topic serialization using the topics builder."]],"type":[["Result","A result of environmental operations."]]});