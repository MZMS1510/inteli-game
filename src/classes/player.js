export class Player {
  static instance;

  /**
   * @param {Phaser.Scene} scene The scene you're spawning the player on
   * @returns Returns the player instance
   */
  constructor(scene) {
    if (this.instance) {
      this.instance.scene = scene;
      return this.instance;
    }

    this.scene = scene;
    this.instance = this;
  }

  preload() {
    this.scene.load.spritesheet("player", "player.png", {
      frameWidth: 48,
      frameHeight: 48,
    });
  }

  spawn(x, y) {
    this.sprite = this.scene.add.sprite(x, y, "player").setScale(5, 5);
    this.create();
  }

  create() {
    this.speed = 500;
  }

  update(time, delta) {
    // Cálculo de movimento
    let movement = this.speed * (delta / 1000);

    // Movimento vertical
    if (this.scene.input.keyboard.addKey("W").isDown) {
      this.sprite.y -= movement;
    } else if (this.scene.input.keyboard.addKey("S").isDown) {
      this.sprite.y += movement;
    }

    // Movimento horizontal
    if (this.scene.input.keyboard.addKey("A").isDown) {
      this.sprite.x -= movement;
    } else if (this.scene.input.keyboard.addKey("D").isDown) {
      this.sprite.x += movement;
    }
  }

  destroy() {
    this.sprite.destroy();
  }
}
