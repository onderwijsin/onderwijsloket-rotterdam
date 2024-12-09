export default () => {
    const mode: Mode = process.env.MODE
    const isDev = process.env.MODE === 'dev'
    const isDemo = process.env.MODE === 'demo'
    const isStaging = process.env.MODE === 'staging' || process.env.MODE === 'preview'
    const isPreview = process.env.MODE === 'preview'
    const isProd = process.env.MODE === 'prod'
    const isProdEnv = process.env.NODE_ENV === 'production'

    return {
        mode,
        isDev,
        isDemo,
        isStaging,
        isPreview,
        isProd,
        isProdEnv
    }
}