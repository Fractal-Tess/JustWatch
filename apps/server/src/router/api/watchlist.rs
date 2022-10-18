#[allow(dead_code)]
#[allow(unused)]
#[get("/watchlist?<offset>&<count>")]
pub async fn watchlist(offset: Option<u32>, count: Option<u32>) {}

// #[post("/api/watchlist", data = "<movie>")]
// pub async fn add_to_watchlist(movie: Json<Movie>) {
//     println!("{:?}", movie)
// }
