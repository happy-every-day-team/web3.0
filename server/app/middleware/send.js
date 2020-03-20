
module.exports = options => {
    return async function send(ctx, next) {
        try {

            console.log(ctx.url)

            await next()
        } catch (error) {
            ctx.status = 404
            console.log(404)
            ctx.body = error
            
            console.log(error)
        }

    }
}
