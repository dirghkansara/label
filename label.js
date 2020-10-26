function useFriendStatus (friendID) {
    const [isOnline, setIsOnline] = useState(null);
    // ...

    //Show a lable in DevTools next to this Hook
    // e.g. "FriendStatus: Online"
    useDebugValue(isOnline ? 'Online' : 'Offline');

    return isOnline;
}