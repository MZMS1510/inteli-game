import { Scene } from "phaser";

export class Game extends Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.cameras.main.setBackgroundColor(0x00ff00);

    this.player = this.add.sprite(640, 360, "player").setScale(5, 5);

    // this.input.once("pointerdown", () => {
    //   this.scene.start("GameOver");
    // });
  }

  update() {
    if (this.input.keyboard.addKey("W").isDown) {
      this.player.y -= 5;
    } else if (this.input.keyboard.addKey("S").isDown) {
      this.player.y += 5;
    }

    if (this.input.keyboard.addKey("A").isDown) {
      this.player.x -= 5;
    } else if (this.input.keyboard.addKey("D").isDown) {
      this.player.x += 5;
    }

    this.cameras.main.centerOn(this.player.x, this.player.y);
  }
}
