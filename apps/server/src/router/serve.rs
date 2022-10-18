use rocket::http::ContentType;
use rust_embed::RustEmbed;
use std::borrow::Cow;
use std::ffi::OsStr;
use std::path::PathBuf;

#[derive(RustEmbed)]
#[folder = "../web/dist"]
struct Asset;

#[get("/<file..>")]
pub fn serve(file: PathBuf) -> Option<(ContentType, Cow<'static, [u8]>)> {
    let path = file.display().to_string();
    if path == "" {
        let asset = Asset::get("index.html")?;
        return Some((ContentType::HTML, asset.data));
    }

    let asset = Asset::get(&path)?;
    let content_type = file
        .extension()
        .and_then(OsStr::to_str)
        .and_then(ContentType::from_extension)
        .unwrap_or(ContentType::Bytes);

    Some((content_type, asset.data))
}
