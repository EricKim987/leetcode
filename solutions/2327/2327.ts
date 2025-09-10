export function peopleAwareOfSecret(n: number, delay: number, forget: number): number {
    const mod = 10**9 + 7;
    const dp: number[] = new Array(n).fill(0);
    dp[0] = 1;
    let total = 0;
    for (let i = delay; i < n; i++) {
        total += dp[i - delay];
        dp[i] = total % mod;
        if (i - forget + 1 >= 0) {
            total -= dp[i - forget + 1];
            total = (total + mod) % mod; 
        }
    }

    let res = 0;
    for (let i = n - forget; i < n; i++) {
        res = (res + dp[i]) % mod;
    }

    return res;
};
