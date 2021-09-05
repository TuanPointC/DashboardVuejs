import { createModule, mutation, action, getter, Module, createProxy } from "vuex-class-component";
const VuexModule = createModule({
    namespaced: "StateModule",
    strict: false,
})
export class StateModule extends VuexModule {
    private routerName = ""

    @mutation
    changeRouterName(name: string) {
        this.routerName = name
    }


}
export default StateModule;