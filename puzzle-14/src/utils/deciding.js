export const selectWinner = (user1, user2) => {
    // if both users have the same choice, return null
    if (user1.choice === user2.choice) return null

    // check if user1's choice beats user2's choice
    if (user1.choice === 'fire' && user2.choice === 'snow') return user1
    if (user1.choice === 'snow' && user2.choice === 'earth') return user1
    if (user1.choice === 'earth' && user2.choice === 'fire') return user1
    
    // if user1's choice is not a winner, return user2
    return user2
}
