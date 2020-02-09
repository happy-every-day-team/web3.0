
module.exports = options => {
    return async function send(ctx, next) {
        try {



            await next()
        } catch (error) {
            ctx.status = 404
            ctx.body = error
            console.log(error.name)
        }

    }
}
