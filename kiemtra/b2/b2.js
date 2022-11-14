 function numberOneTriangle() {
        const n = Number(prompt("Nhập n", 1))
    
        for (let i = n; i >= 1; i--) {
          let s = ''
          for (let j = 1; j <= i; j++) {
            s = s + '*'
          }
          console.log(s)
        }
      }
      