export default function (context) {
    if (process.client) {
        context.store.dispatch('userControl')
    } else {
        context.store.dispatch('userControl', context.req)
    }
}