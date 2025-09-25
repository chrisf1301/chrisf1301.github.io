// Assignment 7: Draw Scene
document.getElementById('draw-btn').onclick = () => {
    const sceneContainer = document.getElementById('scene-container');
    
    // Clear previous scene
    sceneContainer.innerHTML = '';
    
    // Add ground
    const ground = document.createElement('div');
    ground.className = 'ground';
    sceneContainer.appendChild(ground);
    
    // Create 6 clouds using for loop
    for(let i = 0; i < 6; i++) {
        const cloud = document.createElement('div');
        cloud.className = 'cloud';
        cloud.style.left = (i * 120 + 50) + 'px';
        cloud.style.top = (50 + Math.random() * 100) + 'px';
        sceneContainer.appendChild(cloud);
    }
    
    // Create 6 trees using for loop
    for(let i = 0; i < 6; i++) {
        const tree = document.createElement('div');
        tree.className = 'tree';
        tree.style.left = (i * 120 + 50) + 'px';
        
        const trunk = document.createElement('div');
        trunk.className = 'tree-trunk';
        
        const leaves = document.createElement('div');
        leaves.className = 'tree-leaves';
        
        tree.appendChild(leaves);
        tree.appendChild(trunk);
        sceneContainer.appendChild(tree);
    }
    
    // Check time for sun or moon
    const currentHour = new Date().getHours();
    const isNight = currentHour >= 18 || currentHour < 6;
    
    if(isNight) {
        sceneContainer.style.background = 'linear-gradient(to bottom, #191970 0%, #000000 100%)';
        const moon = document.createElement('div');
        moon.className = 'moon';
        sceneContainer.appendChild(moon);
    } else {
        sceneContainer.style.background = 'linear-gradient(to bottom, #87CEEB 0%, #98FB98 100%)';
        const sun = document.createElement('div');
        sun.className = 'sun';
        sceneContainer.appendChild(sun);
    }
};