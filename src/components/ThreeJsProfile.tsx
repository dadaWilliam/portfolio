"use client";

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeJsProfile = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // For convenience
    const pi = Math.PI;
    
    // Set up the scene
    const scene = new THREE.Scene();
    const canvas = canvasRef.current;
    
    // Get dimensions from the parent container, not window
    const parentElement = canvas.parentElement;
    if (!parentElement) return;
    
    const w = parentElement.clientWidth;
    const h = parentElement.clientHeight;
    
    const aspectRatio = w / h;
    const fieldOfView = 45;
    const nearPlane = 1;
    const farPlane = 1000;
    
    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    );
    
    // Set up renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });
    
    const dpi = window.devicePixelRatio;
    renderer.setSize(w * dpi, h * dpi);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    // Position camera
    camera.position.set(25, 5, 0);
    camera.lookAt(new THREE.Vector3(0, 4, 0));
    
    // Lights - 3 point lighting
    const col_light = 0xffffff;
    
    const light = new THREE.AmbientLight(col_light, 0.6);
    scene.add(light);
    
    const keyLight = new THREE.DirectionalLight(col_light, 0.6);
    keyLight.position.set(20, 30, 10);
    keyLight.castShadow = true;
    keyLight.shadow.camera.top = 20;
    scene.add(keyLight);
    
    const fillLight = new THREE.DirectionalLight(col_light, 0.3);
    fillLight.position.set(-20, 20, 20);
    scene.add(fillLight);
    
    const backLight = new THREE.DirectionalLight(col_light, 0.1);
    backLight.position.set(10, 0, -20);
    scene.add(backLight);
    
    // Materials
    const mat_green_ground = new THREE.MeshLambertMaterial({ color: 0x65BB61 });
    const mat_grey = new THREE.MeshLambertMaterial({ color: 0xf3f2f7 });
    const mat_green_leaves = new THREE.MeshLambertMaterial({ color: 0x4CAF50 });
    const mat_dark = new THREE.MeshLambertMaterial({ color: 0x5a6e6c });
    const mat_brown = new THREE.MeshLambertMaterial({ color: 0xa3785f });
    const mat_stone = new THREE.MeshLambertMaterial({ color: 0x9eaeac });
    
    // Ground
    const layers: THREE.Mesh[] = [];
    const ground = new THREE.Group();
    
    for (let i = 0; i < 5; i++) {
      const h = 0.1;
      const geometry = new THREE.CylinderGeometry(8 - i - 0.01, 8 - i, h, 9);
      layers.push(new THREE.Mesh(geometry, mat_green_ground));
      layers[i].position.y = h * i;
      layers[i].receiveShadow = true;
      ground.add(layers[i]);
    }
    
    layers[0].scale.x = 0.8;
    layers[1].scale.set(0.77, 1, 0.91);
    layers[1].rotation.y = ((2 * pi) / 9) * 0.6;
    layers[2].scale.set(0.8, 1, 0.91);
    layers[2].rotation.y = ((2 * pi) / 9) * 0.3;
    layers[3].scale.set(0.75, 1, 0.92);
    layers[3].rotation.y = ((2 * pi) / 9) * 0.7;
    layers[4].scale.set(0.7, 1, 0.93);
    layers[4].rotation.y = ((2 * pi) / 9) * 0.9;
    
    const geo_base = new THREE.CylinderGeometry(8, 1, 10, 9);
    const base = new THREE.Mesh(geo_base, mat_dark);
    base.scale.x = layers[0].scale.x;
    base.position.y = -5;
    ground.add(base);
    
    scene.add(ground);
    
    // Trees
    const tree = new THREE.Group();
    
    // Trunk
    const geo_trunk = new THREE.IcosahedronGeometry(9, 0);
    const trunk = new THREE.Mesh(geo_trunk, mat_grey);
    trunk.rotation.x = pi / 2;
    trunk.position.y = 5;
    trunk.scale.set(0.03, 0.03, 1);
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    tree.add(trunk);
    
    // Crown
    const geo_crown = new THREE.IcosahedronGeometry(2.5, 0);
    const crown = new THREE.Mesh(geo_crown, mat_green_leaves);
    crown.scale.y = 0.4;
    crown.rotation.z = -0.5;
    crown.rotation.x = -0.2;
    crown.position.set(trunk.position.x, 12, trunk.position.z);
    crown.castShadow = true;
    tree.add(crown);
    
    // Leaf
    const leaf = new THREE.Group();
    const mainStem = new THREE.Mesh(geo_trunk, mat_grey);
    mainStem.scale.set(0.007, 0.007, 0.16);
    mainStem.rotation.x = pi / 2;
    mainStem.castShadow = true;
    leaf.add(mainStem);
    
    const geo_blade = new THREE.CylinderGeometry(0.7, 0.7, 0.05, 12);
    const blade = new THREE.Mesh(geo_blade, mat_green_leaves);
    blade.rotation.z = pi / 2;
    blade.scale.x = 1.2;
    blade.position.set(-0.05, 0.4, 0);
    blade.castShadow = true;
    leaf.add(blade);
    
    const subStems: THREE.Mesh[] = [];
    for (let i = 0; i < 8; i++) {
      subStems[i] = mainStem.clone();
      subStems[i].scale.set(0.0055, 0.0055, 0.01);
      subStems[i].castShadow = true;
      leaf.add(subStems[i]);
    }
    
    subStems[0].rotation.x = -pi / 4;
    subStems[0].scale.z = 0.04;
    subStems[0].position.set(0, 0.8, 0.2);
    
    subStems[2].rotation.x = -pi / 6;
    subStems[2].scale.z = 0.05;
    subStems[2].position.set(0, 0.5, 0.25);
    
    subStems[4].rotation.x = -pi / 8;
    subStems[4].scale.z = 0.055;
    subStems[4].position.set(0, 0.2, 0.3);
    
    subStems[6].rotation.x = -pi / 10;
    subStems[6].scale.z = 0.045;
    subStems[6].position.set(0, -0.1, 0.26);
    
    for (let i = 1; i < 8; i += 2) {
      subStems[i].rotation.x = -subStems[i - 1].rotation.x;
      subStems[i].scale.z = subStems[i - 1].scale.z;
      subStems[i].position.set(
        0,
        subStems[i - 1].position.y,
        -subStems[i - 1].position.z
      );
    }
    
    leaf.rotation.x = pi / 3;
    leaf.rotation.z = 0.2;
    leaf.position.set(trunk.position.x - 0.2, 5, trunk.position.z + 1);
    tree.add(leaf);
    
    const leaf_1 = leaf.clone();
    leaf_1.rotation.x = -pi / 3;
    leaf_1.position.set(trunk.position.x - 0.2, 6, trunk.position.z - 1);
    tree.add(leaf_1);
    tree.rotation.y = -pi / 12;
    tree.position.set(-2, 0, -2);
    scene.add(tree);
    
    const tree_1 = tree.clone();
    tree_1.scale.set(0.8, 0.8, 0.8);
    tree_1.position.set(-1, 0, -5);
    tree_1.rotation.y = -pi / 5;
    scene.add(tree_1);
    
    const tree_2 = tree.clone();
    tree_2.scale.set(0.7, 0.7, 0.7);
    tree_2.position.set(-2, 0, 0.5);
    tree_2.rotation.y = -pi / 12;
    
    // Need to use children and cast to correct type for these specific operations
    const tree2Children = tree_2.children;
    if (tree2Children[2] instanceof THREE.Group) {
      tree2Children[2].rotation.x = -pi / 3;
      tree2Children[2].position.z = trunk.position.z - 1;
    }
    if (tree2Children[3] instanceof THREE.Group) {
      tree2Children[3].rotation.x = pi / 3;
      tree2Children[3].position.z = trunk.position.z + 1;
    }
    
    scene.add(tree_2);
    
    // Stones
    const geo_stone = new THREE.DodecahedronGeometry(1, 0);
    const stone: THREE.Mesh[] = [];
    
    for (let i = 0; i < 2; i++) {
      stone[i] = new THREE.Mesh(geo_stone, mat_stone);
      scene.add(stone[i]);
      stone[i].castShadow = true;
    }
    
    stone[0].rotation.set(0, 12, pi / 2);
    stone[0].scale.set(3, 1, 1);
    stone[0].position.set(-1, 1, 4.6);
    
    stone[1].rotation.set(0, 0, pi / 2);
    stone[1].scale.set(1, 1, 1);
    stone[1].position.set(0, 0.7, 5.3);
    
    // Sheep
    const sheep = new THREE.Group();
    
    // Sheep head
    const geo_sheepHead = new THREE.IcosahedronGeometry(1, 0);
    const sheepHead = new THREE.Mesh(geo_sheepHead, mat_dark);
    sheepHead.scale.z = 0.6;
    sheepHead.scale.y = 1.1;
    sheepHead.position.y = 2.5;
    sheepHead.rotation.x = -0.2;
    sheepHead.castShadow = true;
    sheep.add(sheepHead);
    
    // Sheep body
    const geo_sheepBody = new THREE.IcosahedronGeometry(3.5, 0);
    const sheepBody = new THREE.Mesh(geo_sheepBody, mat_grey);
    sheepBody.position.set(0, sheepHead.position.y, -2.2);
    sheepBody.scale.set(0.5, 0.5, 0.6);
    sheepBody.rotation.set(0, 0, pi / 3);
    sheepBody.castShadow = true;
    sheep.add(sheepBody);
    
    // Sheep tail
    const geo_tail = new THREE.IcosahedronGeometry(0.5, 0);
    const tail = new THREE.Mesh(geo_tail, mat_grey);
    tail.position.set(sheepHead.position.x, sheepHead.position.y + 1.2, -3.8);
    tail.castShadow = true;
    sheep.add(tail);
    
    // Sheep hair
    const hair: THREE.Mesh[] = [];
    const geo_hair = new THREE.IcosahedronGeometry(0.4, 0);
    
    for (let i = 0; i < 5; i++) {
      hair[i] = new THREE.Mesh(geo_hair, mat_grey);
      hair[i].castShadow = true;
      sheep.add(hair[i]);
    }
    
    hair[0].position.set(-0.4, sheepHead.position.y + 0.9, -0.1);
    hair[1].position.set(0, sheepHead.position.y + 1, -0.1);
    hair[2].position.set(0.4, sheepHead.position.y + 0.9, -0.1);
    hair[3].position.set(-0.1, sheepHead.position.y + 0.9, -0.4);
    hair[4].position.set(0.12, sheepHead.position.y + 0.9, -0.4);
    
    hair[0].rotation.set(pi / 12, 0, pi / 3);
    hair[1].rotation.set(pi / 12, pi / 6, pi / 3);
    hair[2].rotation.set(pi / 12, 0, pi / 3);
    hair[3].rotation.set(pi / 12, 0, pi / 3);
    hair[4].rotation.set(pi / 12, pi / 6, pi / 3);
    
    hair[0].scale.set(0.6, 0.6, 0.6);
    hair[2].scale.set(0.8, 0.8, 0.8);
    hair[3].scale.set(0.7, 0.7, 0.7);
    hair[4].scale.set(0.6, 0.6, 0.6);
    
    // Sheep legs
    const legs: THREE.Mesh[] = [];
    const geo_leg = new THREE.CylinderGeometry(0.15, 0.1, 1, 5);
    
    for (let i = 0; i < 4; i++) {
      legs[i] = new THREE.Mesh(geo_leg, mat_dark);
      legs[i].castShadow = true;
      legs[i].receiveShadow = true;
      sheep.add(legs[i]);
    }
    
    legs[0].position.set(0.5, 1.1, -1.5);
    legs[1].position.set(-0.5, 1.1, -1.5);
    legs[2].position.set(0.8, 1.1, -3);
    legs[3].position.set(-0.8, 1.1, -3);
    
    // Sheep feet
    const feet: THREE.Mesh[] = [];
    const geo_foot = new THREE.DodecahedronGeometry(0.2, 0);
    
    for (let i = 0; i < legs.length; i++) {
      feet[i] = new THREE.Mesh(geo_foot, mat_dark);
      sheep.add(feet[i]);
      feet[i].scale.set(1, 0.8, 1);
      feet[i].castShadow = true;
      feet[i].receiveShadow = true;
      feet[i].position.set(legs[i].position.x, 0, legs[i].position.z + 0.09);
    }
    
    feet[0].position.y = 0.56;
    feet[1].position.y = 0.66;
    feet[2].position.y = 0.7;
    feet[3].position.y = 0.7;
    
    // Sheep eyes
    const geo_eye = new THREE.CylinderGeometry(0.3, 0.2, 0.05, 8);
    const eyes: THREE.Mesh[] = [];
    
    for (let i = 0; i < 2; i++) {
      eyes[i] = new THREE.Mesh(geo_eye, mat_grey);
      sheep.add(eyes[i]);
      eyes[i].castShadow = true;
      eyes[i].position.set(0, sheepHead.position.y + 0.1, 0.5);
      eyes[i].rotation.x = pi / 2 - pi / 15;
    }
    
    eyes[0].position.x = 0.3;
    eyes[1].position.x = -eyes[0].position.x;
    
    eyes[0].rotation.z = -pi / 15;
    eyes[1].rotation.z = -eyes[0].rotation.z;
    
    // Sheep eyeballs
    const geo_eyeball = new THREE.SphereGeometry(0.11, 8, 8);
    const eyeballs: THREE.Mesh[] = [];
    
    for (let i = 0; i < 2; i++) {
      eyeballs[i] = new THREE.Mesh(geo_eyeball, mat_dark);
      sheep.add(eyeballs[i]);
      eyeballs[i].castShadow = true;
      eyeballs[i].position.set(
        eyes[i].position.x,
        eyes[i].position.y,
        eyes[i].position.z + 0.02
      );
    }
    
    sheep.position.set(4.8, -0.2, -1);
    sheep.scale.set(0.8, 0.8, 0.8);
    sheep.rotation.set(0, pi / 4, 0);
    scene.add(sheep);
    
    // Fence
    const fence = new THREE.Group();
    const wood: THREE.Mesh[] = [];
    const geo_wood = new THREE.BoxGeometry(1, 1, 1);
    
    for (let i = 0; i < 4; i++) {
      wood[i] = new THREE.Mesh(geo_wood, mat_brown);
      fence.add(wood[i]);
      wood[i].castShadow = true;
      wood[i].receiveShadow = true;
    }
    
    wood[0].scale.set(0.15, 1.7, 0.4);
    wood[1].scale.set(0.15, 1.8, 0.4);
    wood[2].scale.set(0.1, 0.3, 3.2);
    wood[3].scale.set(0.1, 0.3, 3.2);
    
    wood[0].position.set(0, 1.2, -1);
    wood[1].position.set(0, 1, 1);
    wood[2].position.set(0, 1.5, 0);
    wood[3].position.set(0.12, 0.9, 0);
    
    wood[3].rotation.x = pi / 32;
    wood[2].rotation.x = -pi / 32;
    wood[2].rotation.y = pi / 32;
    
    fence.position.set(3, 0, 2);
    fence.rotation.y = pi / 5;
    scene.add(fence);
    
    // Camera control variables
    let isDragging = false;
    let previousMousePosition = {
      x: 0,
      y: 0
    };
    let cameraRadius = 25; // Distance from camera to center
    let cameraAngleHorizontal = 0; // Initial horizontal angle
    let cameraAngleVertical = 0.2; // Initial vertical angle (slightly above horizon)
    
    // Function to update camera position based on angles
    const updateCameraPosition = () => {
      // Calculate camera position in spherical coordinates
      camera.position.x = cameraRadius * Math.sin(cameraAngleHorizontal) * Math.cos(cameraAngleVertical);
      camera.position.y = cameraRadius * Math.sin(cameraAngleVertical);
      camera.position.z = cameraRadius * Math.cos(cameraAngleHorizontal) * Math.cos(cameraAngleVertical);
      
      // Look at the center of the scene
      camera.lookAt(new THREE.Vector3(0, 4, 0));
    };
    
    // Add mouse movement interactivity for the sheep's eyes
    const handleMouseMove = (evt: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = evt.clientX - rect.left;
      const mouseY = evt.clientY - rect.top;
      
      // Sheep eye movement
      const offsetX = (0.2 / rect.width) * (mouseX - rect.width / 2);
      const offsetY = (0.3 / rect.height) * (mouseY - (rect.height * 2) / 5);
      
      eyeballs[0].position.x = eyes[0].position.x + offsetX;
      eyeballs[0].position.y = eyes[0].position.y - offsetY;
      eyeballs[1].position.x = eyes[1].position.x + offsetX;
      eyeballs[1].position.y = eyes[1].position.y - offsetY;
      
      // Camera rotation when dragging
      if (isDragging) {
        const deltaMove = {
          x: mouseX - previousMousePosition.x,
          y: mouseY - previousMousePosition.y
        };
        
        // Adjust camera angles based on mouse movement
        cameraAngleHorizontal -= deltaMove.x * 0.01;
        cameraAngleVertical += deltaMove.y * 0.01;
        
        // Limit vertical angle to avoid flipping
        cameraAngleVertical = Math.max(-Math.PI/2 + 0.1, Math.min(Math.PI/2 - 0.1, cameraAngleVertical));
        
        updateCameraPosition();
        
        previousMousePosition = {
          x: mouseX,
          y: mouseY
        };
      }
    };
    
    // Handle mouse down for camera rotation
    const handleMouseDown = (evt: MouseEvent) => {
      isDragging = true;
      previousMousePosition = {
        x: evt.clientX - canvas.getBoundingClientRect().left,
        y: evt.clientY - canvas.getBoundingClientRect().top
      };
    };
    
    // Handle mouse up for camera rotation
    const handleMouseUp = () => {
      isDragging = false;
    };
    
    // Handle scroll for zooming
    const handleWheel = (evt: WheelEvent) => {
      // Adjust camera radius based on scroll
      cameraRadius += evt.deltaY * 0.05;
      
      // Limit how close and far the camera can be
      cameraRadius = Math.max(10, Math.min(40, cameraRadius));
      
      updateCameraPosition();
      
      // Prevent default scrolling behavior
      evt.preventDefault();
    };
    
    // Add event listeners
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseUp);
    canvas.addEventListener('wheel', handleWheel);
    
    // Set initial camera position
    updateCameraPosition();
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Add gentle rotation to the entire scene for a more dynamic feel
      scene.rotation.y += 0.001;
      
      renderer.render(scene, camera);
    };
    
    // Start animation
    animate();
    
    // Resize handler
    const handleResize = () => {
      if (!canvasRef.current) return;
      
      const parent = canvasRef.current.parentElement as HTMLElement;
      const newWidth = parent.clientWidth;
      const newHeight = parent.clientHeight;
      
      // Update camera
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      
      // Update renderer
      const newDpi = window.devicePixelRatio;
      renderer.setSize(newWidth * newDpi, newHeight * newDpi);
      canvasRef.current.style.width = `${newWidth}px`;
      canvasRef.current.style.height = `${newHeight}px`;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseUp);
      canvas.removeEventListener('wheel', handleWheel);
      
      // Dispose geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, []);
  
  return <canvas ref={canvasRef} className="w-full h-full" />;
};

export default ThreeJsProfile;