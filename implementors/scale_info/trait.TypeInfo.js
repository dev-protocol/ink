(function() {var implementors = {};
implementors["ink_core"] = [{"text":"impl <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"enum\" href=\"ink_core/env/enum.DefaultEnvTypes.html\" title=\"enum ink_core::env::DefaultEnvTypes\">DefaultEnvTypes</a>","synthetic":false,"types":["ink_core::env::types::DefaultEnvTypes"]},{"text":"impl <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_core/env/struct.AccountId.html\" title=\"struct ink_core::env::AccountId\">AccountId</a>","synthetic":false,"types":["ink_core::env::types::AccountId"]},{"text":"impl <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_core/env/struct.Hash.html\" title=\"struct ink_core::env::Hash\">Hash</a>","synthetic":false,"types":["ink_core::env::types::Hash"]},{"text":"impl <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_core/storage/alloc/struct.BumpAlloc.html\" title=\"struct ink_core::storage::alloc::BumpAlloc\">BumpAlloc</a>","synthetic":false,"types":["ink_core::storage::alloc::bump_alloc::BumpAlloc"]},{"text":"impl <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_core/storage/alloc/struct.DynAlloc.html\" title=\"struct ink_core::storage::alloc::DynAlloc\">DynAlloc</a>","synthetic":false,"types":["ink_core::storage::alloc::dyn_alloc::DynAlloc"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_core/storage/cell/struct.SyncCell.html\" title=\"struct ink_core::storage::cell::SyncCell\">SyncCell</a>&lt;T&gt;","synthetic":false,"types":["ink_core::storage::cell::sync_cell::SyncCell"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_core/storage/chunk/struct.SyncChunk.html\" title=\"struct ink_core::storage::chunk::SyncChunk\">SyncChunk</a>&lt;T&gt;","synthetic":false,"types":["ink_core::storage::chunk::sync_chunk::chunk::SyncChunk"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"scale_info/trait.Metadata.html\" title=\"trait scale_info::Metadata\">Metadata</a> + 'static&gt; <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_core/storage/struct.BinaryHeap.html\" title=\"struct ink_core::storage::BinaryHeap\">BinaryHeap</a>&lt;T&gt;","synthetic":false,"types":["ink_core::storage::collections::binary_heap::impls::BinaryHeap"]},{"text":"impl <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_core/storage/struct.BitVec.html\" title=\"struct ink_core::storage::BitVec\">BitVec</a>","synthetic":false,"types":["ink_core::storage::collections::bitvec::vec::BitVec"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"scale_info/trait.Metadata.html\" title=\"trait scale_info::Metadata\">Metadata</a> + 'static, V:&nbsp;<a class=\"trait\" href=\"scale_info/trait.Metadata.html\" title=\"trait scale_info::Metadata\">Metadata</a> + 'static&gt; <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_core/storage/struct.BTreeMap.html\" title=\"struct ink_core::storage::BTreeMap\">BTreeMap</a>&lt;K, V&gt;","synthetic":false,"types":["ink_core::storage::collections::btree_map::impls::BTreeMap"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"scale_info/trait.Metadata.html\" title=\"trait scale_info::Metadata\">Metadata</a> + 'static, V:&nbsp;<a class=\"trait\" href=\"scale_info/trait.Metadata.html\" title=\"trait scale_info::Metadata\">Metadata</a> + 'static&gt; <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_core/storage/struct.HashMap.html\" title=\"struct ink_core::storage::HashMap\">HashMap</a>&lt;K, V&gt;","synthetic":false,"types":["ink_core::storage::collections::hash_map::impls::HashMap"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"scale_info/trait.Metadata.html\" title=\"trait scale_info::Metadata\">Metadata</a> + 'static&gt; <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_core/storage/struct.Stash.html\" title=\"struct ink_core::storage::Stash\">Stash</a>&lt;T&gt;","synthetic":false,"types":["ink_core::storage::collections::stash::impls::Stash"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"scale_info/trait.Metadata.html\" title=\"trait scale_info::Metadata\">Metadata</a> + 'static&gt; <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_core/storage/struct.Vec.html\" title=\"struct ink_core::storage::Vec\">Vec</a>&lt;T&gt;","synthetic":false,"types":["ink_core::storage::collections::vec::impls::Vec"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"scale_info/trait.Metadata.html\" title=\"trait scale_info::Metadata\">Metadata</a> + 'static&gt; <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_core/storage/struct.Value.html\" title=\"struct ink_core::storage::Value\">Value</a>&lt;T&gt;","synthetic":false,"types":["ink_core::storage::value::Value"]},{"text":"impl <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_core/storage2/alloc/struct.DynamicAllocation.html\" title=\"struct ink_core::storage2::alloc::DynamicAllocation\">DynamicAllocation</a>","synthetic":false,"types":["ink_core::storage2::alloc::allocation::DynamicAllocation"]},{"text":"impl <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_core/storage2/collections/stash/struct.VacantEntry.html\" title=\"struct ink_core::storage2::collections::stash::VacantEntry\">VacantEntry</a>","synthetic":false,"types":["ink_core::storage2::collections::stash::VacantEntry"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"scale_info/trait.Metadata.html\" title=\"trait scale_info::Metadata\">Metadata</a> + 'static&gt; <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"enum\" href=\"ink_core/storage2/collections/stash/enum.Entry.html\" title=\"enum ink_core::storage2::collections::stash::Entry\">Entry</a>&lt;T&gt;","synthetic":false,"types":["ink_core::storage2::collections::stash::Entry"]}];
implementors["ink_primitives"] = [{"text":"impl <a class=\"trait\" href=\"scale_info/trait.TypeInfo.html\" title=\"trait scale_info::TypeInfo\">TypeInfo</a> for <a class=\"struct\" href=\"ink_primitives/struct.Key.html\" title=\"struct ink_primitives::Key\">Key</a>","synthetic":false,"types":["ink_primitives::key::Key"]}];
implementors["scale_info"] = [];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()