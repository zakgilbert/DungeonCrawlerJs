class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;


        this.state = "standing";
        this.ready = false;
        this.readyCheck = true;
        this.inAction = false;
        this.previousState = "";

        this.standing = new sprite(0, 0, 992, 1280, 16, 16, "images/pally_stand.png", "hero");
        this.readyStance = new sprite(0, 0, 640, 1712, 16, 8, "images/pally_ready.png", "hero");
        this.readyWalk = new sprite(0, 0, 990, 1616, 16, 10, "images/pally_ready_walk.png", "hero");
        this.walking = new sprite(0, 0, 1040, 1296, 16, 10, "images/pally_walk.png", "hero");
        this.running = new sprite(0, 0, 752, 1648, 16, 8, "images/pally_run.png", "hero");
        this.attack_1 = new sprite(0, 0, 2700, 2160, 16, 15, "images/pally_attack_1.png", "hero");

        this.states = {
            readyStance: this.readyStance,
            readyWalk: this.readyWalk,
            walking: this.walking,
            running: this.running,
            standing: this.standing,
            attack_1: this.attack_1
        };
    }
    getCurrentSprite() {
        return this.states[this.state];
    }
}
