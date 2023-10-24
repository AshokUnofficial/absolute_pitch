export default async function handler (req, res) {
    const url = new URL('http://localhost:3000' + req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const userId = searchParams.get('user_id') ? searchParams.get('user_id') : '';
    const data = await fetch(`https://mylatinhome.com/absolutepitch/user_plan_status.php?user_id=${userId}`);

    const resp = await data.json();
 
    res.status(200).json(resp);
}
