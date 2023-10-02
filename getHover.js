function getHover() {
    let row, column;
    // Loop through the row images
    for (let i = 0; i < rs.length; i++) {
      let img = rs[i];
      
      // Get the color of the pixel at (mouseX, mouseY)
      let c = img.get(mouseX, mouseY);
      // Check if the pixel is black
      if (c[3] === 255) {
        row = i;
        break;
      }
    }
  
    // Loop through the column images
    for (let i = 0; i < cs.length; i++) {
      let img = cs[i];
      
      // Get the color of the pixel at (mouseX, mouseY)
      let c = img.get(mouseX, mouseY);
      // Check if the pixel is black
      if (c[3] === 255) {
        column = i;
        break;
      }
    }
    return { row: row, column: column};
  }