export default function (context) {

    if (context.store.state.admin) {
        context.redirect('/admin')
    }
}