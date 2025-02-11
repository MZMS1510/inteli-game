import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.cameras.main.setBackgroundColor(0x00ff00);

    this.add.image(512, 384, "background").setAlpha(0.5);

    this.player = this.add.sprite(500, 500, "player").setScale(5, 5);

    // this.input.once("pointerdown", () => {
    //   this.scene.start("GameOver");
    // });
  }

  update() {}
}
