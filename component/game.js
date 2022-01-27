AFRAME.registerComponent("game-play", {
  schema: {
    elementId: {type: "string", default: "#coin_1"}
  },
  init: function() {
    var duration = 120
    var timer_1 = document.querySelector("#timer")
  },
  start_timer: function(duration, timer_1) {
    var minutes
    var seconds
    setInterval(() => {
      if (duration >= 0) {
        minutes = parseInt(duration / 60)
        seconds = parseInt(duration % 60)
        if (minutes < 10) {
          minutes = "0" + minutes
        }
        if (seconds < 10) {
          seconds = "0" + seconds
        }
        timer_1.setAttribute("text", {
          value: minutes + ":" + seconds
        })
        duration -= 1
      } else {
        this.gameOver()
      }
    }, 1000)
  },
  isCollided: function(elementId) {
    const element = document.querySelector(elementId)
    element.addEventListener("collide", e => {
      if (elementId.includes("#coin")) {
        element.setAttribute("visible", false)
        this.updateTarget()
        this.updateScore()
      } else {
        this.gameOver()
      }
    }, 1000)
  },
  update: function() {
    this.isCollided(this.data.elementId)
  },
  updateTarget: function() {
    var element = document.querySelector("#coin")
    var count = element.getAttribute("text").value
    var currentTargets = parseInt(count)
    currentTargets -= 1
    element.setAttribute("text", {value: currentTargets})
  },
  updateScore: function() {
    var element = document.querySelector("#score")
    var count = element.getAttribute("text").value
    var currentScore = parseInt(count)
    currentScore += 50
    element.setAttribute("text", {value: currentScore})
  },
  gameOver: function() {
    var element = document.querySelector("#diver")
    var plane_1 = document.querySelector("game_over_text")
    element.setAttribute("visible", true)
    plane_1.setAttribute("dynamic-body", {mass: 1})
  }
})