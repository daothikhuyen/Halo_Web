const message = () => {
    return [
        {
            id: 1,
            conversation_id: 1,
            sender_id:2,
            content: "Chào bạn",
            message_text: 'text',
            created_at :"8:20 28/9/2024",
            user : {
                id: 2,
                username: "Huỳnh Minh",
                number_phone: "0834006765",
                avatar: "https://ava-grp-talk.zadn.vn/b/4/3/3/2/360/0e77b13addf1be947c5fd32fc218bebc.jpg",
                status: "offline",
                created_at: "20/10/2018"
            }
        },
        {
            id: 2,
            conversation_id: 1,
            sender_id:3,
            content: "Chào bạn nhé",
            message_text: 'text',
            created_at :"8:20 28/9/2024",
            user : {
                id: 3,
                username: "Trà My",
                number_phone: "0834006765",
                avatar: "https://ava-grp-talk.zadn.vn/b/4/3/3/2/360/0e77b13addf1be947c5fd32fc218bebc.jpg",
                status: "online",
                created_at: "20/10/2018"
            }
        }
    ]
}

export default{
    message
}