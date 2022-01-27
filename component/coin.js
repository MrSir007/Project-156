AFRAME.registerComponent('coin', {
  init: function() {
    for (var i = 1; i <= 20; i++) {
      var id = `coin${i}`
      var posX = (Math.random() * 30 + (-10))
      var posY = 1
      var posZ = (Math.random() * 30 + -10)
      var position = {
        x: posX,
        y: posY,
        z: posZ
      }
      this.createCoin(id, position)
    }
  },
  createCoin: function(id, position) {
    var seabed_1 = document.querySelector('#seabed')
    var coin_1 = document.createElement('a-entity')
    coin_1.setAttribute('gltf-model', 'assets/coin/scene.gltf')
    coin_1.setAttribute('animation-mixer', {})
    coin_1.setAtrribute('id', id)
    coin_1.setAttribute("static-body")
    coin_1.setAtrribute('position', position)
    seabed_1.appendChild(coin_1)
  }
})