
class Sprite {
    constructor(x, y, w, h, rows, cols, path, type) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.rows = rows;
        this.cols = cols;

        this.frame_width = w / cols;
        this.frame_height = h / rows;

        this.current_frame_x = 0;
        this.current_frame_y = 0;

        this.src_x = 0;
        this.src_y = 0;

        this.texture = new Image();
        this.texture.src = path;

        this.type = type;
        if ("hero" === this.type) {
            this.x = getMiddle(WIDTH, this.frame_width);
            this.y = getMiddle(HEIGHT, this.frame_height);
        }
    };

    update_types = {
        updateX: () => {
            this.current_frame_x = ++this.current_frame_x % this.cols;
            this.src_x = this.current_frame_x * this.frame_width;

            let checkFrame = this.cols - 1;

            if (hero.inAction && this.current_frame_x === checkFrame) {
                hero.inAction = false;
                hero.state = hero.previousState;
                hero.previousState = "";
            }
        },
        updateY: (angle) => {
            this.current_frame_y = angle;
            this.src_y = angle * this.frame_height;
        },

        hero: (mouse) => {

            this.update_types.updateX();

            if (mouse.moving) {
                this.update_types.updateY(mouse.angle);
            }
        }
    };

    po() {
        console.log(this);
    }

    draw(ctx) {
        ctx.drawImage(this.texture, this.src_x, this.src_y, this.frame_width, this.frame_height, this.x, this.y, this.frame_width, this.frame_height);
    }
    update(x) {
        this.update_types[this.type](x);
    }

    animate(ctx, mouse) {
        this.update(mouse);
        this.draw(ctx);
    }
}
