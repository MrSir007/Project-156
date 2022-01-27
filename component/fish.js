AFRAME.registerComponent('fish', {
  init: function() {
    for (var i = 1; i <= 20; i++) {
      var id = `fish${i}`
      var posX = (Math.random() * 30 + (-10))
      var posY = 1
      var posZ = (Math.random() * 30 + -10)
      var position = {
        x: posX,
        y: posY,
        z: posZ
      }
      this.createFish(id, position)
    }
  },
  createFish: (id, position) => {
    var seabed_1 = document.querySelector('#seabed')
    var fish_1 = document.createElement('a-entity')
    fish_1.setAttribute('gltf-model', 'assets/fish/scene.gltf')
    fish_1.setAttribute('animation-mixer', {})
    fish_1.setAtrribute('id', id)
    fish_1.setAttribute("static-body")
    fish_1.setAtrribute('position', position)
    fish_1.setAttribute('scale', { x: 500, y: 500, z: 500})
    seabed_1.appendChild(fish_1)
  }
})