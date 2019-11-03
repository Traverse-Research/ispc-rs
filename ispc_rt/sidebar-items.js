initSidebarItems({"fn":[["print_instrumenting_summary","Print out a summary of performace data gathered from instrumenting ISPC. Must enable instrumenting to have this record and print data, see `Config::instrument`."],["set_instrument","If you have implemented your own instrument for logging ISPC performance data you can use this function to provide it for use instead of the default one. This function must be called before calling into ISPC code, otherwise the instrumenter will already be set to the default."],["set_task_system","If you have implemented your own task system you can provide it for use instead of the default threaded one. This must be done prior to calling ISPC code which spawns tasks otherwise the task system will have already been initialized to `Parallel`, which you can also see as an example for implementing a task system."]],"macro":[["ispc_module","Convenience macro for generating the module to hold the raw/unsafe ISPC bindings."]],"mod":[["exec","Defines the trait that must be implemented by ISPC task execution systems and provides a default threaded one for use."],["instrument","Defines the trait that must be implemented by ISPC instrumentation callbacks structs and provides a default one."],["task","Defines structs for operating on ISPC task groups and getting chunks of a task to be scheduled on to threads"]],"struct":[["PackagedModule","A `PackagedModule` refers to an ISPC module which was previously built using `ispc_compile`, and is now distributed with the crate."]]});