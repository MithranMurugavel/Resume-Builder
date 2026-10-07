import { ImageKit } from "@imagekit/nodejs";

const imageKit = new ImageKit({
    private:process.env.IMG_PRIVATE_KEY,
});

export default imageKit;