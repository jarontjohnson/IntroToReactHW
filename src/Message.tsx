const Message = () => {
    const name = "Jay"
    return (
        <>
            <div>
                <h1>Hello {name} && "What's up Thieves, It's me"</h1>
                <h1>{name ? name: "Hi everyone"}</h1>
            </div>
        </>
    )
}

export default Message