/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tweenjs/tween.js */ "./node_modules/@tweenjs/tween.js/dist/tween.esm.js");
/* harmony import */ var cannon_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cannon-es */ "./node_modules/cannon-es/dist/cannon-es.js");
//23fi088 野中花梨




class ThreeJSContainer {
    scene;
    scene0;
    scene1;
    light;
    penlightGroup;
    constructor() {
    }
    // 画面部分の作成(表示する枠ごとに)*
    createRendererDOM = (width, height, cameraPos) => {
        let renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_2__.Color(0x495ed));
        renderer.shadowMap.enabled = true; //シャドウマップを有効にする
        //カメラの設定
        let camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(120, width / height, 0.1, 1000);
        camera.position.copy(cameraPos);
        camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 0, 0));
        let orbitControls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(camera, renderer.domElement);
        this.createScene();
        // 毎フレームのupdateを呼んで，render
        // reqestAnimationFrame により次フレームを呼ぶ
        let render = (time) => {
            orbitControls.update();
            renderer.render(this.scene, camera);
            //renderer.render(this.scene1, camera);
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
        renderer.domElement.style.cssFloat = "left";
        renderer.domElement.style.margin = "10px";
        return renderer.domElement;
    };
    // シーンの作成(全体で1回)
    createScene = () => {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();
        this.scene0 = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();
        let points = [];
        let pointNum = 30; //いくつの点で曲線を表現するか
        let x = 0.05;
        for (let i = 0; i < pointNum; ++i) {
            x += 1.5 / pointNum;
            points.push(new three__WEBPACK_IMPORTED_MODULE_2__.Vector2(x, Math.log(x)));
            //x,yを少しずつづらして第4事象でy=1.x=0から10points作る
            //θを‐π/2から0まで変化させればよい
        }
        let group = new three__WEBPACK_IMPORTED_MODULE_2__.Group();
        let group0 = new three__WEBPACK_IMPORTED_MODULE_2__.Group();
        //ラッパ部分
        let latheGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.LatheGeometry(points);
        //ジオメトリー設定(第2引数はセグメント数：3つセットのpointsを6個作ってつなげる)
        let latheMaterial = new three__WEBPACK_IMPORTED_MODULE_2__.MeshPhongMaterial({ color: 0xf6ee04, side: three__WEBPACK_IMPORTED_MODULE_2__.DoubleSide }); //マテリアル設定
        let latheMesh = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(latheGeometry, latheMaterial);
        latheMesh.rotation.x = Math.PI / 2 * 0.70;
        group.add(latheMesh);
        // //点列を可視化するコード
        // let sphereGeometry = new THREE.SphereGeometry(0.025);
        // let redMaterial = new THREE.MeshPhongMaterial({ color: 0xf6ee04});
        // for(let i = 0; i < points.length; ++i) {
        //     let mesh = new THREE.Mesh(sphereGeometry, redMaterial);
        //     mesh.position.set(points[i].x, points[i].y, 0);
        //     this.scene.add(mesh);
        // }
        let Geometry = new three__WEBPACK_IMPORTED_MODULE_2__.TorusGeometry(1.0, 0.13, 30, 80, 2.5);
        let Materia = new three__WEBPACK_IMPORTED_MODULE_2__.MeshPhongMaterial({ color: 0x00ffff, side: three__WEBPACK_IMPORTED_MODULE_2__.DoubleSide, flatShading: true });
        let tunagi = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(Geometry, Materia);
        let tunagix = 0;
        let tunagiy = -1.92;
        let tunagiz = -1.6;
        tunagi.position.set(tunagix, tunagiy, tunagiz);
        tunagi.rotation.x = -(Math.PI / 2) + 6;
        tunagi.rotation.y = -Math.PI / 2;
        group.add(tunagi);
        let Geometrytubu = new three__WEBPACK_IMPORTED_MODULE_2__.TorusGeometry(1.2, 0.05, 30, 80, 2);
        let tunagitubu = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(Geometrytubu, Materia);
        tunagitubu.position.set(tunagix, tunagiy, -1.4);
        tunagitubu.rotation.x = -(Math.PI / 2);
        tunagitubu.rotation.z = -(Math.PI / 2) * 0.2;
        //tunagitubu.rotation.y =- Math.PI / 2;
        tunagitubu.position.y = -2.1;
        group.add(tunagitubu);
        const geometrybox = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(0.5, 0.2, 0.2);
        const cube = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometrybox, Materia);
        cube.position.y = -2.1;
        cube.position.z = -2.57;
        cube.rotation.x = -1.8;
        group.add(cube);
        const geometrybox0 = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(0.12, 0.1, 0.2);
        const cube0 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometrybox0, Materia);
        cube0.position.x = 1.18;
        cube0.position.y = -2.1;
        cube0.position.z = -1.1;
        cube0.rotation.y = -0.2;
        group.add(cube0);
        //はり
        let hariGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.ConeGeometry(0.04, 0.3, 30, 1); //ジオメトリー設定(第2引数はセグメント数：3つセットのpointsを6個作ってつなげる)
        let hariMaterial = new three__WEBPACK_IMPORTED_MODULE_2__.MeshPhongMaterial({ color: 0xf6ee04, side: three__WEBPACK_IMPORTED_MODULE_2__.DoubleSide });
        let hariMesh = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(hariGeometry, hariMaterial);
        hariMesh.rotation.x = Math.PI;
        hariMesh.position.x = 1.2;
        hariMesh.position.y = -2.2;
        hariMesh.position.z = -1.1;
        group.add(hariMesh);
        //土台
        const texture = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader().load('木2.jpeg');
        let drawShape = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_2__.Shape();
            shape.moveTo(1.5, -2.3);
            shape.lineTo(1.5, -4.0);
            shape.lineTo(-1.5, -4.0);
            shape.lineTo(-1.5, -2.3);
            return shape;
        };
        let extrudeSettings = {
            steps: 2,
            depth: 3,
            bevelEnabled: false,
            bevelThickness: 3,
            bevelSize: 2,
            bevelSegments: 3
        };
        let drawShape0 = () => {
            // THREE.Shapeを作成
            let shape = new three__WEBPACK_IMPORTED_MODULE_2__.Shape();
            shape.moveTo(1.7, -2.3);
            shape.lineTo(1.7, -2.5);
            shape.lineTo(-1.7, -2.5);
            shape.lineTo(-1.7, -2.3);
            return shape;
        };
        let extrudeSettings0 = {
            steps: 2,
            depth: 3.4,
            bevelEnabled: false,
            bevelThickness: 3.4,
            bevelSize: 2,
            bevelSegments: 3
        };
        let shapeGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.ExtrudeGeometry(drawShape(), extrudeSettings);
        const meshMaterial = new three__WEBPACK_IMPORTED_MODULE_2__.MeshStandardMaterial({
            map: texture,
            roughness: 0.5,
            metalness: 0.5,
        });
        let mesh = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(shapeGeometry, meshMaterial);
        let shapeGeometry0 = new three__WEBPACK_IMPORTED_MODULE_2__.ExtrudeGeometry(drawShape0(), extrudeSettings0);
        let mesh0 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(shapeGeometry0, meshMaterial);
        let mesh1 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(shapeGeometry0, meshMaterial);
        mesh.position.z = -2;
        mesh0.position.z = -2.2;
        mesh1.position.z = -2.2;
        mesh1.position.y = -1.7;
        group.add(mesh1);
        group.add(mesh0);
        group.add(mesh);
        //中央ピン
        const geometrycenter = new three__WEBPACK_IMPORTED_MODULE_2__.CylinderGeometry(0.03, 0.03, 0.5, 32);
        const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({ color: 0x00ff00 });
        //const capsule = new THREE.Mesh(geometrycenter, material);
        const capsule0 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometrycenter, material);
        const capsule1 = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometrycenter, material);
        // capsule.position.y = -2.45;
        // capsule.position.z = -0.5;
        capsule0.position.y = -2.3;
        capsule0.position.z = 0;
        capsule1.position.y = -2.3;
        capsule1.position.z = 0;
        capsule0.rotation.x = -Math.PI / 2;
        capsule1.rotation.x = -Math.PI / 2;
        capsule1.rotation.z = -Math.PI / 2;
        //group.add(capsule);
        group0.add(capsule0);
        group0.add(capsule1);
        this.scene.add(group0);
        //レコード
        //let recodeGeometry = new THREE.RingGeometry(0, 1.5, 30, 16, 1.5, 6.283185307179586);
        let recodeGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.CircleGeometry(1.5, 30, 0, 6.283185307179586);
        let recodeMateria = new three__WEBPACK_IMPORTED_MODULE_2__.MeshPhongMaterial({ color: 0x000000, side: three__WEBPACK_IMPORTED_MODULE_2__.DoubleSide, flatShading: true });
        let recodeMash = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(recodeGeometry, recodeMateria);
        recodeMash.rotation.x = Math.PI / 2;
        recodeMash.position.y = -2.29;
        recodeMash.position.z = 0;
        group0.add(recodeMash);
        const geometryre = new three__WEBPACK_IMPORTED_MODULE_2__.TorusGeometry(1, 0.01, 30, 70);
        const materialre = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({ color: 0xffff00 });
        const torus = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometryre, materialre);
        torus.rotation.x = Math.PI / 2;
        torus.position.y = -2.29;
        torus.position.z = -0.5;
        group.add(torus);
        this.scene.add(group);
        group.position.z = 0.5;
        const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(100, 100, 100);
        const edges = new three__WEBPACK_IMPORTED_MODULE_2__.EdgesGeometry(geometry);
        const linea = new three__WEBPACK_IMPORTED_MODULE_2__.LineSegments(edges, new three__WEBPACK_IMPORTED_MODULE_2__.LineBasicMaterial({ color: 0xffffff }));
        this.scene0.add(linea);
        //ライトの設定
        this.light = new three__WEBPACK_IMPORTED_MODULE_2__.DirectionalLight(0xffffff);
        let lvec = new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(0, 1, 1).clone().normalize();
        this.light.position.set(lvec.x, lvec.y, lvec.z);
        this.scene.add(this.light);
        //パーティクル
        let particleNum = 1000;
        const positions = new Float32Array(particleNum * 3);
        const sphereTargets = new Array(particleNum);
        const icosahedronTargets = new Array(particleNum);
        const circleTargets = new Array(particleNum);
        // 初期位置（原点）と球面上の目標座標を計算
        for (let i = 0; i < particleNum; ++i) {
            positions[i * 3] = 0;
            positions[i * 3 + 1] = 0;
            positions[i * 3 + 2] = 0;
            const pi = Math.acos(2 * Math.random() - 1);
            const theta = 2 * Math.PI * Math.random();
            const r = 7;
            sphereTargets[i] = {
                x: r * Math.sin(pi) * Math.cos(theta),
                y: r * Math.sin(pi) * Math.sin(theta),
                z: r * Math.cos(pi)
            };
            const geometryIcosahedron = new three__WEBPACK_IMPORTED_MODULE_2__.IcosahedronGeometry(4, 1);
            const icoPos = geometryIcosahedron.getAttribute('position');
            const icoIndex = i % icoPos.count;
            icosahedronTargets[i] = {
                x: icoPos.getX(icoIndex),
                y: icoPos.getY(icoIndex),
                z: icoPos.getZ(icoIndex)
            };
            // トーラス（わっか）上の座標
            // TorusGeometryのパラメータ
            const torusR = 2;
            const torusTube = 0.5;
            const angle = 2 * Math.PI * (i / particleNum);
            circleTargets[i] = {
                x: (torusR + torusTube * Math.cos(theta)) * Math.cos(angle),
                y: (torusR + torusTube * Math.cos(theta)) * Math.sin(angle),
                z: torusTube * Math.sin(theta)
            };
        }
        const geometryp = new three__WEBPACK_IMPORTED_MODULE_2__.BufferGeometry();
        geometryp.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_2__.BufferAttribute(positions, 3));
        const materialp = new three__WEBPACK_IMPORTED_MODULE_2__.PointsMaterial({ color: 0xffffff, size: 0.2 });
        const pointsp = new three__WEBPACK_IMPORTED_MODULE_2__.Points(geometryp, materialp);
        this.scene.add(pointsp);
        const geometryIcosahedron = new three__WEBPACK_IMPORTED_MODULE_2__.IcosahedronGeometry(3, 1);
        geometryIcosahedron.getAttribute('position');
        //const icoParticleGeometry = new THREE.BufferGeometry();
        //geometry0.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const materialIcosahedron = new three__WEBPACK_IMPORTED_MODULE_2__.PointsMaterial({ color: 0xffffff, size: 0.2 });
        const pointsIcosahedron = new three__WEBPACK_IMPORTED_MODULE_2__.Points(geometryIcosahedron, materialIcosahedron);
        //this.scene.add(pointsIcosahedron);
        const geometrycircle = new three__WEBPACK_IMPORTED_MODULE_2__.TorusGeometry();
        geometrycircle.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_2__.BufferAttribute(positions, 3));
        const materialcircle = new three__WEBPACK_IMPORTED_MODULE_2__.PointsMaterial({ color: 0xffffff, size: 0.2 });
        const pointscircle = new three__WEBPACK_IMPORTED_MODULE_2__.Points(geometrycircle, materialcircle);
        //this.scene.add(pointscircle);
        //アニメーション用
        let tweenObj = { t: 0 };
        // 原点→球面
        const toSphere = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenObj)
            .to({ t: 1 }, 2000)
            .easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out)
            .onUpdate(() => {
            for (let i = 0; i < particleNum; ++i) {
                positions[i * 3] = sphereTargets[i].x * tweenObj.t;
                positions[i * 3 + 1] = sphereTargets[i].y * tweenObj.t;
                positions[i * 3 + 2] = sphereTargets[i].z * tweenObj.t;
            }
            geometryp.attributes.position.needsUpdate = true;
        });
        // 球面→多面体
        const toIcosahedron = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenObj)
            .to({ t: 2 }, 2000)
            .easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out)
            .onUpdate(() => {
            for (let i = 0; i < particleNum; ++i) {
                positions[i * 3] = icosahedronTargets[i].x * tweenObj.t;
                positions[i * 3 + 1] = icosahedronTargets[i].y * tweenObj.t;
                positions[i * 3 + 2] = icosahedronTargets[i].z * tweenObj.t;
            }
            geometryp.attributes.position.needsUpdate = true;
        });
        // 多面体→わっか
        const tocircle = new _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Tween(tweenObj)
            .to({ t: 3 }, 2000)
            .easing(_tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.Easing.Elastic.Out)
            .onUpdate(() => {
            for (let i = 0; i < particleNum; ++i) {
                positions[i * 3] = circleTargets[i].x * tweenObj.t;
                positions[i * 3 + 1] = circleTargets[i].y * tweenObj.t;
                positions[i * 3 + 2] = circleTargets[i].z * tweenObj.t;
            }
            geometryp.attributes.position.needsUpdate = true;
        });
        // // わっか→原点
        // const to0 = new TWEEN.Tween(tweenObj)
        //     .to({ t: 0 }, 2000)
        //     .easing(TWEEN.Easing.Elastic.Out)
        //     .onUpdate(() => {
        //         for (let i = 0; i < particleNum; ++i) {
        //             positions[i * 3] = sphereTargets[i].x * tweenObj.t;
        //             positions[i * 3 + 1] = sphereTargets[i].y * tweenObj.t;
        //             positions[i * 3 + 2] = sphereTargets[i].z * tweenObj.t;
        //         }
        //         geometryp.attributes.position.needsUpdate = true;
        //     });
        toSphere.chain(toIcosahedron);
        toIcosahedron.chain(tocircle);
        tocircle.chain(toSphere);
        //to0.chain(toSphere);
        toSphere.start();
        //人
        const rings = 15;
        const baseRadius = 3; // 一番内側の半径
        const penlights = [];
        this.penlightGroup = new three__WEBPACK_IMPORTED_MODULE_2__.Group();
        for (let r = 0; r < rings; r++) {
            const radius = baseRadius + r * 0.2; // 外側にいくほど半径が大きくなる
            const numPerRing = 12 + r * 5; // 外側ほど多く配置
            for (let i = 0; i < numPerRing; i++) {
                const angle = (i / numPerRing) * Math.PI * 2;
                const penlight = new three__WEBPACK_IMPORTED_MODULE_2__.Group();
                const beamGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.CylinderGeometry(0.05, 0.05, 0.3, 16);
                const beamMaterial = new three__WEBPACK_IMPORTED_MODULE_2__.MeshStandardMaterial();
                const beam = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(beamGeometry, beamMaterial);
                beam.position.y = -1.8;
                penlight.add(beam);
                penlights.push(beam);
                // 円周上に配置
                penlight.position.x = radius * Math.cos(angle);
                penlight.position.z = radius * Math.sin(angle);
                penlight.position.y = -2.2;
                this.penlightGroup.add(penlight);
            }
        }
        this.scene.add(this.penlightGroup);
        //物理演算を行うための要素たち
        const world = new cannon_es__WEBPACK_IMPORTED_MODULE_3__.World({ gravity: new cannon_es__WEBPACK_IMPORTED_MODULE_3__.Vec3(0, -9.82, 0) });
        world.defaultContactMaterial.friction = 0.1; //摩擦係数
        world.defaultContactMaterial.restitution = 0.1; //反発係数
        // 玉を定期的に発射
        let ballsmesh = []; //見た目
        let ballsbody = []; //buturi
        const dropConfetti = () => {
            const width = 0.1, height = 0.1, depth = 0.01;
            const color = new three__WEBPACK_IMPORTED_MODULE_2__.Color(Math.random(), Math.random(), Math.random());
            const material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshStandardMaterial({ color, side: three__WEBPACK_IMPORTED_MODULE_2__.DoubleSide });
            const geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(width, height, depth);
            const mesh = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);
            // ランダムな上空位置から落とす
            const x = (Math.random() - 0.5) * 15;
            const y = 15;
            const z = (Math.random() - 0.5) * 15;
            mesh.position.set(x, y, z);
            this.scene.add(mesh);
            ballsmesh.push(mesh);
            const shape = new cannon_es__WEBPACK_IMPORTED_MODULE_3__.Box(new cannon_es__WEBPACK_IMPORTED_MODULE_3__.Vec3(width / 2, height / 2, depth / 2));
            const body = new cannon_es__WEBPACK_IMPORTED_MODULE_3__.Body({ mass: 0.1, shape });
            body.position.set(x, y, z);
            // 紙吹雪っぽくゆっくり落下しながら回転
            body.velocity.set(0, -0.5 - Math.random(), 0);
            body.angularVelocity.set((Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 5);
            body.linearDamping = 0.9; // 空気抵抗
            body.angularDamping = 0.6; // 回転減衰
            world.addBody(body);
            ballsbody.push(body);
        };
        setInterval(dropConfetti, 100); // 0.3秒おきに1枚落とす
        //床を作る
        const phongMaterial = new three__WEBPACK_IMPORTED_MODULE_2__.MeshPhongMaterial({ color: 0x000000 });
        const planeGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.PlaneGeometry(15, 15);
        const planeMesh = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(planeGeometry, phongMaterial);
        planeMesh.material.side = three__WEBPACK_IMPORTED_MODULE_2__.DoubleSide; // 両面
        planeMesh.rotateX(-Math.PI / 2);
        planeMesh.position.y = -4.2;
        this.scene.add(planeMesh);
        //床の物理演算
        const planeShape = new cannon_es__WEBPACK_IMPORTED_MODULE_3__.Plane();
        const planeBody = new cannon_es__WEBPACK_IMPORTED_MODULE_3__.Body({ mass: 0 });
        planeBody.addShape(planeShape);
        planeBody.position.set(planeMesh.position.x, planeMesh.position.y, planeMesh.position.z);
        planeBody.quaternion.set(planeMesh.quaternion.x, planeMesh.quaternion.y, planeMesh.quaternion.z, planeMesh.quaternion.w);
        world.addBody(planeBody);
        // 毎フレームのupdateを呼んで，更新
        // reqestAnimationFrame により次フレームを呼ぶ
        const clock = new three__WEBPACK_IMPORTED_MODULE_2__.Clock();
        let t = 0;
        let update = (time) => {
            const hue = (time * 0.0001) % 1.0; // 0〜1の範囲でループ
            const color = new three__WEBPACK_IMPORTED_MODULE_2__.Color();
            color.setHSL(hue, 1.0, 0.5); // 彩度1, 明度0.5（色相だけ変化）
            const angle = Math.sin(time * 0.01) * 0.3; // ペンの振り幅と速さ調整
            for (let i = 0; i < penlights.length; i++) {
                const material = penlights[i].material;
                material.color.copy(color);
                penlights[i].rotation.z = angle;
            }
            group0.rotation.y += 0.01;
            _tweenjs_tween_js__WEBPACK_IMPORTED_MODULE_1__.update(); //追加分
            world.fixedStep();
            for (let i = 0; i < ballsmesh.length; i++) {
                // 位置の更新
                ballsmesh[i].position.set(ballsbody[i].position.x, ballsbody[i].position.y, ballsbody[i].position.z);
                // 回転の更新
                ballsmesh[i].quaternion.set(ballsbody[i].quaternion.x, ballsbody[i].quaternion.y, ballsbody[i].quaternion.z, ballsbody[i].quaternion.w);
            }
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    };
}
window.addEventListener("DOMContentLoaded", init);
function init() {
    let container = new ThreeJSContainer();
    let viewport = container.createRendererDOM(640, 480, new three__WEBPACK_IMPORTED_MODULE_2__.Vector3(3.0, 1, 4)); //画面の幅とカメラの位置
    document.body.appendChild(viewport);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcgprendering"] = self["webpackChunkcgprendering"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_tweenjs_tween_js_dist_tween_esm_js-node_modules_cannon-es_dist_cannon-es-180163"], () => (__webpack_require__("./src/app.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOzs7Ozs7O1VDaGdCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NncHJlbmRlcmluZy8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NncHJlbmRlcmluZy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLzIzZmkwODgg6YeO5Lit6Iqx5qKoXG5cbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9sc1wiO1xuaW1wb3J0ICogYXMgVFdFRU4gZnJvbSBcIkB0d2VlbmpzL3R3ZWVuLmpzXCI7XG5pbXBvcnQgKiBhcyBDQU5OT04gZnJvbSAnY2Fubm9uLWVzJztcblxuY2xhc3MgVGhyZWVKU0NvbnRhaW5lciB7XG4gICAgcHJpdmF0ZSBzY2VuZTogVEhSRUUuU2NlbmU7XG4gICAgcHJpdmF0ZSBzY2VuZTA6IFRIUkVFLlNjZW5lO1xuICAgIHByaXZhdGUgc2NlbmUxOiBUSFJFRS5TY2VuZTtcbiAgICBwcml2YXRlIGxpZ2h0OiBUSFJFRS5MaWdodDtcbiAgICBwZW5saWdodEdyb3VwOiBUSFJFRS5Hcm91cDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgLy8g55S76Z2i6YOo5YiG44Gu5L2c5oiQKOihqOekuuOBmeOCi+aeoOOBlOOBqOOBqykqXG4gICAgcHVibGljIGNyZWF0ZVJlbmRlcmVyRE9NID0gKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjYW1lcmFQb3M6IFRIUkVFLlZlY3RvcjMpID0+IHtcbiAgICAgICAgbGV0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbiAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcihuZXcgVEhSRUUuQ29sb3IoMHg0OTVlZCkpO1xuICAgICAgICByZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7IC8v44K344Oj44OJ44Km44Oe44OD44OX44KS5pyJ5Yq544Gr44GZ44KLXG5cbiAgICAgICAgLy/jgqvjg6Hjg6njga7oqK3lrppcbiAgICAgICAgbGV0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSgxMjAsIHdpZHRoIC8gaGVpZ2h0LCAwLjEsIDEwMDApO1xuICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShjYW1lcmFQb3MpO1xuICAgICAgICBjYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTtcblxuICAgICAgICBsZXQgb3JiaXRDb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5jcmVhdGVTY2VuZSgpO1xuICAgICAgICAvLyDmr47jg5Xjg6zjg7zjg6Djga51cGRhdGXjgpLlkbzjgpPjgafvvIxyZW5kZXJcbiAgICAgICAgLy8gcmVxZXN0QW5pbWF0aW9uRnJhbWUg44Gr44KI44KK5qyh44OV44Os44O844Og44KS5ZG844G2XG4gICAgICAgIGxldCByZW5kZXI6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIG9yYml0Q29udHJvbHMudXBkYXRlKCk7XG5cbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcih0aGlzLnNjZW5lLCBjYW1lcmEpO1xuICAgICAgICAgICAgLy9yZW5kZXJlci5yZW5kZXIodGhpcy5zY2VuZTEsIGNhbWVyYSk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcblxuICAgICAgICByZW5kZXJlci5kb21FbGVtZW50LnN0eWxlLmNzc0Zsb2F0ID0gXCJsZWZ0XCI7XG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XG4gICAgICAgIHJldHVybiByZW5kZXJlci5kb21FbGVtZW50O1xuICAgIH1cblxuICAgIC8vIOOCt+ODvOODs+OBruS9nOaIkCjlhajkvZPjgacx5ZueKVxuICAgIHByaXZhdGUgY3JlYXRlU2NlbmUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgICAgdGhpcy5zY2VuZTAgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICAgICAgICBsZXQgcG9pbnRzOiBUSFJFRS5WZWN0b3IyW10gPSBbXTtcbiAgICAgICAgbGV0IHBvaW50TnVtID0gMzA7Ly/jgYTjgY/jgaTjga7ngrnjgafmm7Lnt5rjgpLooajnj77jgZnjgovjgYtcbiAgICAgICAgbGV0IHggPSAwLjA1O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50TnVtOyArK2kpIHtcbiAgICAgICAgICAgIHggKz0gMS41IC8gcG9pbnROdW07XG4gICAgICAgICAgICBwb2ludHMucHVzaChuZXcgVEhSRUUuVmVjdG9yMih4LCBNYXRoLmxvZyh4KSkpO1xuICAgICAgICAgICAgLy94LHnjgpLlsJHjgZfjgZrjgaTjgaXjgonjgZfjgabnrKw05LqL6LGh44GneT0xLng9MOOBi+OCiTEwcG9pbnRz5L2c44KLXG4gICAgICAgICAgICAvL86444KS4oCQz4AvMuOBi+OCiTDjgb7jgaflpInljJbjgZXjgZvjgozjgbDjgojjgYRcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IGdyb3VwID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgICAgIGxldCBncm91cDAgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICAgICAgLy/jg6njg4Pjg5Hpg6jliIZcbiAgICAgICAgbGV0IGxhdGhlR2VvbWV0cnkgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwb2ludHMpO1xuICAgICAgICAvL+OCuOOCquODoeODiOODquODvOioreWumijnrKwy5byV5pWw44Gv44K744Kw44Oh44Oz44OI5pWw77yaM+OBpOOCu+ODg+ODiOOBrnBvaW50c+OCkjblgIvkvZzjgaPjgabjgaTjgarjgZLjgospXG5cbiAgICAgICAgbGV0IGxhdGhlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHhmNmVlMDQsIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUgfSk7Ly/jg57jg4bjg6rjgqLjg6voqK3lrppcbiAgICAgICAgbGV0IGxhdGhlTWVzaCA9IG5ldyBUSFJFRS5NZXNoKGxhdGhlR2VvbWV0cnksIGxhdGhlTWF0ZXJpYWwpO1xuICAgICAgICBsYXRoZU1lc2gucm90YXRpb24ueCA9IE1hdGguUEkgLyAyICogMC43MDtcbiAgICAgICAgZ3JvdXAuYWRkKGxhdGhlTWVzaCk7XG5cbiAgICAgICAgLy8gLy/ngrnliJfjgpLlj6/oppbljJbjgZnjgovjgrPjg7zjg4lcbiAgICAgICAgLy8gbGV0IHNwaGVyZUdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDAuMDI1KTtcbiAgICAgICAgLy8gbGV0IHJlZE1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4ZjZlZTA0fSk7XG4gICAgICAgIC8vIGZvcihsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgLy8gICAgIGxldCBtZXNoID0gbmV3IFRIUkVFLk1lc2goc3BoZXJlR2VvbWV0cnksIHJlZE1hdGVyaWFsKTtcbiAgICAgICAgLy8gICAgIG1lc2gucG9zaXRpb24uc2V0KHBvaW50c1tpXS54LCBwb2ludHNbaV0ueSwgMCk7XG4gICAgICAgIC8vICAgICB0aGlzLnNjZW5lLmFkZChtZXNoKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBsZXQgR2VvbWV0cnkgPSBuZXcgVEhSRUUuVG9ydXNHZW9tZXRyeSgxLjAsIDAuMTMsIDMwLCA4MCwgMi41KTtcbiAgICAgICAgbGV0IE1hdGVyaWEgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBjb2xvcjogMHgwMGZmZmYsIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsIGZsYXRTaGFkaW5nOiB0cnVlIH0pO1xuICAgICAgICBsZXQgdHVuYWdpID0gbmV3IFRIUkVFLk1lc2goR2VvbWV0cnksIE1hdGVyaWEpO1xuICAgICAgICBsZXQgdHVuYWdpeCA9IDA7XG4gICAgICAgIGxldCB0dW5hZ2l5ID0gLTEuOTI7XG4gICAgICAgIGxldCB0dW5hZ2l6ID0gLTEuNjtcbiAgICAgICAgdHVuYWdpLnBvc2l0aW9uLnNldCh0dW5hZ2l4LCB0dW5hZ2l5LCB0dW5hZ2l6KTtcbiAgICAgICAgdHVuYWdpLnJvdGF0aW9uLnggPSAtKE1hdGguUEkgLyAyKSArIDY7XG4gICAgICAgIHR1bmFnaS5yb3RhdGlvbi55ID0gLSBNYXRoLlBJIC8gMjtcbiAgICAgICAgZ3JvdXAuYWRkKHR1bmFnaSk7XG5cbiAgICAgICAgbGV0IEdlb21ldHJ5dHVidSA9IG5ldyBUSFJFRS5Ub3J1c0dlb21ldHJ5KDEuMiwgMC4wNSwgMzAsIDgwLCAyKTtcbiAgICAgICAgbGV0IHR1bmFnaXR1YnUgPSBuZXcgVEhSRUUuTWVzaChHZW9tZXRyeXR1YnUsIE1hdGVyaWEpO1xuICAgICAgICB0dW5hZ2l0dWJ1LnBvc2l0aW9uLnNldCh0dW5hZ2l4LCB0dW5hZ2l5LCAtMS40KTtcbiAgICAgICAgdHVuYWdpdHVidS5yb3RhdGlvbi54ID0gLShNYXRoLlBJIC8gMik7XG4gICAgICAgIHR1bmFnaXR1YnUucm90YXRpb24ueiA9IC0oTWF0aC5QSSAvIDIpICogMC4yO1xuICAgICAgICAvL3R1bmFnaXR1YnUucm90YXRpb24ueSA9LSBNYXRoLlBJIC8gMjtcbiAgICAgICAgdHVuYWdpdHVidS5wb3NpdGlvbi55ID0gLTIuMTtcbiAgICAgICAgZ3JvdXAuYWRkKHR1bmFnaXR1YnUpO1xuXG4gICAgICAgIGNvbnN0IGdlb21ldHJ5Ym94ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDAuNSwgMC4yLCAwLjIpO1xuXG4gICAgICAgIGNvbnN0IGN1YmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeWJveCwgTWF0ZXJpYSk7XG4gICAgICAgIGN1YmUucG9zaXRpb24ueSA9IC0yLjE7XG4gICAgICAgIGN1YmUucG9zaXRpb24ueiA9IC0yLjU3O1xuICAgICAgICBjdWJlLnJvdGF0aW9uLnggPSAtMS44O1xuICAgICAgICBncm91cC5hZGQoY3ViZSk7XG5cbiAgICAgICAgY29uc3QgZ2VvbWV0cnlib3gwID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDAuMTIsIDAuMSwgMC4yKTtcblxuICAgICAgICBjb25zdCBjdWJlMCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5Ym94MCwgTWF0ZXJpYSk7XG4gICAgICAgIGN1YmUwLnBvc2l0aW9uLnggPSAxLjE4O1xuICAgICAgICBjdWJlMC5wb3NpdGlvbi55ID0gLTIuMTtcbiAgICAgICAgY3ViZTAucG9zaXRpb24ueiA9IC0xLjE7XG4gICAgICAgIGN1YmUwLnJvdGF0aW9uLnkgPSAtMC4yO1xuICAgICAgICBncm91cC5hZGQoY3ViZTApO1xuXG5cbiAgICAgICAgLy/jga/jgopcbiAgICAgICAgbGV0IGhhcmlHZW9tZXRyeSA9IG5ldyBUSFJFRS5Db25lR2VvbWV0cnkoMC4wNCwgMC4zLCAzMCwgMSk7Ly/jgrjjgqrjg6Hjg4jjg6rjg7zoqK3lrpoo56ysMuW8leaVsOOBr+OCu+OCsOODoeODs+ODiOaVsO+8mjPjgaTjgrvjg4Pjg4jjga5wb2ludHPjgpI25YCL5L2c44Gj44Gm44Gk44Gq44GS44KLKVxuICAgICAgICBsZXQgaGFyaU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4ZjZlZTA0LCBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlIH0pO1xuICAgICAgICBsZXQgaGFyaU1lc2ggPSBuZXcgVEhSRUUuTWVzaChoYXJpR2VvbWV0cnksIGhhcmlNYXRlcmlhbCk7XG4gICAgICAgIGhhcmlNZXNoLnJvdGF0aW9uLnggPSBNYXRoLlBJO1xuICAgICAgICBoYXJpTWVzaC5wb3NpdGlvbi54ID0gMS4yO1xuICAgICAgICBoYXJpTWVzaC5wb3NpdGlvbi55ID0gLTIuMjtcbiAgICAgICAgaGFyaU1lc2gucG9zaXRpb24ueiA9IC0xLjE7XG4gICAgICAgIGdyb3VwLmFkZChoYXJpTWVzaCk7XG5cbiAgICAgICAgLy/lnJ/lj7BcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZCgn5pyoMi5qcGVnJyk7XG5cbiAgICAgICAgbGV0IGRyYXdTaGFwZSA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIFRIUkVFLlNoYXBl44KS5L2c5oiQXG4gICAgICAgICAgICBsZXQgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcblxuICAgICAgICAgICAgc2hhcGUubW92ZVRvKDEuNSwgLTIuMyk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oMS41LCAtNC4wKTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygtMS41LCAtNC4wKTtcbiAgICAgICAgICAgIHNoYXBlLmxpbmVUbygtMS41LCAtMi4zKTtcbiAgICAgICAgICAgIHJldHVybiBzaGFwZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXh0cnVkZVNldHRpbmdzID0ge1xuICAgICAgICAgICAgc3RlcHM6IDIsXG4gICAgICAgICAgICBkZXB0aDogMyxcbiAgICAgICAgICAgIGJldmVsRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICBiZXZlbFRoaWNrbmVzczogMyxcbiAgICAgICAgICAgIGJldmVsU2l6ZTogMixcbiAgICAgICAgICAgIGJldmVsU2VnbWVudHM6IDNcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGRyYXdTaGFwZTAgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBUSFJFRS5TaGFwZeOCkuS9nOaIkFxuICAgICAgICAgICAgbGV0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG5cbiAgICAgICAgICAgIHNoYXBlLm1vdmVUbygxLjcsIC0yLjMpO1xuICAgICAgICAgICAgc2hhcGUubGluZVRvKDEuNywgLTIuNSk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oLTEuNywgLTIuNSk7XG4gICAgICAgICAgICBzaGFwZS5saW5lVG8oLTEuNywgLTIuMyk7XG4gICAgICAgICAgICByZXR1cm4gc2hhcGU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGV4dHJ1ZGVTZXR0aW5nczAgPSB7XG4gICAgICAgICAgICBzdGVwczogMixcbiAgICAgICAgICAgIGRlcHRoOiAzLjQsXG4gICAgICAgICAgICBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYmV2ZWxUaGlja25lc3M6IDMuNCxcbiAgICAgICAgICAgIGJldmVsU2l6ZTogMixcbiAgICAgICAgICAgIGJldmVsU2VnbWVudHM6IDNcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IHNoYXBlR2VvbWV0cnkgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KGRyYXdTaGFwZSgpLCBleHRydWRlU2V0dGluZ3MpO1xuICAgICAgICBjb25zdCBtZXNoTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgICAgICAgbWFwOiB0ZXh0dXJlLCAgICAgICAvLyDihpAg44OG44Kv44K544OB44Oj44KS6LK844KK5LuY44GRXG4gICAgICAgICAgICByb3VnaG5lc3M6IDAuNSxcbiAgICAgICAgICAgIG1ldGFsbmVzczogMC41LFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChzaGFwZUdlb21ldHJ5LCBtZXNoTWF0ZXJpYWwpO1xuICAgICAgICBsZXQgc2hhcGVHZW9tZXRyeTAgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KGRyYXdTaGFwZTAoKSwgZXh0cnVkZVNldHRpbmdzMCk7XG4gICAgICAgIGxldCBtZXNoMCA9IG5ldyBUSFJFRS5NZXNoKHNoYXBlR2VvbWV0cnkwLCBtZXNoTWF0ZXJpYWwpO1xuICAgICAgICBsZXQgbWVzaDEgPSBuZXcgVEhSRUUuTWVzaChzaGFwZUdlb21ldHJ5MCwgbWVzaE1hdGVyaWFsKTtcblxuICAgICAgICBtZXNoLnBvc2l0aW9uLnogPSAtMjtcbiAgICAgICAgbWVzaDAucG9zaXRpb24ueiA9IC0yLjI7XG4gICAgICAgIG1lc2gxLnBvc2l0aW9uLnogPSAtMi4yO1xuICAgICAgICBtZXNoMS5wb3NpdGlvbi55ID0gLTEuNztcbiAgICAgICAgZ3JvdXAuYWRkKG1lc2gxKTtcbiAgICAgICAgZ3JvdXAuYWRkKG1lc2gwKTtcbiAgICAgICAgZ3JvdXAuYWRkKG1lc2gpO1xuXG5cbiAgICAgICAgLy/kuK3lpK7jg5Tjg7NcblxuICAgICAgICBjb25zdCBnZW9tZXRyeWNlbnRlciA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAuMDMsIDAuMDMsIDAuNSwgMzIpXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4MDBmZjAwIH0pO1xuICAgICAgICAvL2NvbnN0IGNhcHN1bGUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeWNlbnRlciwgbWF0ZXJpYWwpO1xuICAgICAgICBjb25zdCBjYXBzdWxlMCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5Y2VudGVyLCBtYXRlcmlhbCk7XG4gICAgICAgIGNvbnN0IGNhcHN1bGUxID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnljZW50ZXIsIG1hdGVyaWFsKTtcbiAgICAgICAgLy8gY2Fwc3VsZS5wb3NpdGlvbi55ID0gLTIuNDU7XG4gICAgICAgIC8vIGNhcHN1bGUucG9zaXRpb24ueiA9IC0wLjU7XG4gICAgICAgIGNhcHN1bGUwLnBvc2l0aW9uLnkgPSAtMi4zO1xuICAgICAgICBjYXBzdWxlMC5wb3NpdGlvbi56ID0gMDtcbiAgICAgICAgY2Fwc3VsZTEucG9zaXRpb24ueSA9IC0yLjM7XG4gICAgICAgIGNhcHN1bGUxLnBvc2l0aW9uLnogPSAwO1xuICAgICAgICBjYXBzdWxlMC5yb3RhdGlvbi54ID0gLU1hdGguUEkgLyAyO1xuICAgICAgICBjYXBzdWxlMS5yb3RhdGlvbi54ID0gLU1hdGguUEkgLyAyO1xuICAgICAgICBjYXBzdWxlMS5yb3RhdGlvbi56ID0gLU1hdGguUEkgLyAyO1xuICAgICAgICAvL2dyb3VwLmFkZChjYXBzdWxlKTtcbiAgICAgICAgZ3JvdXAwLmFkZChjYXBzdWxlMCk7XG4gICAgICAgIGdyb3VwMC5hZGQoY2Fwc3VsZTEpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChncm91cDApO1xuICAgICAgICAvL+ODrOOCs+ODvOODiVxuICAgICAgICAvL2xldCByZWNvZGVHZW9tZXRyeSA9IG5ldyBUSFJFRS5SaW5nR2VvbWV0cnkoMCwgMS41LCAzMCwgMTYsIDEuNSwgNi4yODMxODUzMDcxNzk1ODYpO1xuICAgICAgICBsZXQgcmVjb2RlR2VvbWV0cnkgPSBuZXcgVEhSRUUuQ2lyY2xlR2VvbWV0cnkoMS41LCAzMCwgMCwgNi4yODMxODUzMDcxNzk1ODYpO1xuICAgICAgICBsZXQgcmVjb2RlTWF0ZXJpYSA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDAwMCwgc2lkZTogVEhSRUUuRG91YmxlU2lkZSwgZmxhdFNoYWRpbmc6IHRydWUgfSk7XG4gICAgICAgIGxldCByZWNvZGVNYXNoID0gbmV3IFRIUkVFLk1lc2gocmVjb2RlR2VvbWV0cnksIHJlY29kZU1hdGVyaWEpO1xuICAgICAgICByZWNvZGVNYXNoLnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcbiAgICAgICAgcmVjb2RlTWFzaC5wb3NpdGlvbi55ID0gLTIuMjk7XG4gICAgICAgIHJlY29kZU1hc2gucG9zaXRpb24ueiA9IDA7XG4gICAgICAgIGdyb3VwMC5hZGQocmVjb2RlTWFzaCk7XG5cbiAgICAgICAgY29uc3QgZ2VvbWV0cnlyZSA9IG5ldyBUSFJFRS5Ub3J1c0dlb21ldHJ5KDEsIDAuMDEsIDMwLCA3MCk7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFscmUgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZmZmMDAgfSk7XG4gICAgICAgIGNvbnN0IHRvcnVzID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnlyZSwgbWF0ZXJpYWxyZSk7XG4gICAgICAgIHRvcnVzLnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcbiAgICAgICAgdG9ydXMucG9zaXRpb24ueSA9IC0yLjI5O1xuICAgICAgICB0b3J1cy5wb3NpdGlvbi56ID0gLTAuNTtcbiAgICAgICAgZ3JvdXAuYWRkKHRvcnVzKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoZ3JvdXApO1xuXG4gICAgICAgIGdyb3VwLnBvc2l0aW9uLnogPSAwLjU7XG5cbiAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAwLCAxMDAsIDEwMCk7XG4gICAgICAgIGNvbnN0IGVkZ2VzID0gbmV3IFRIUkVFLkVkZ2VzR2VvbWV0cnkoZ2VvbWV0cnkpO1xuICAgICAgICBjb25zdCBsaW5lYSA9IG5ldyBUSFJFRS5MaW5lU2VnbWVudHMoZWRnZXMsIG5ldyBUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiB9KSk7XG4gICAgICAgIHRoaXMuc2NlbmUwLmFkZChsaW5lYSk7XG5cblxuICAgICAgICAvL+ODqeOCpOODiOOBruioreWumlxuICAgICAgICB0aGlzLmxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYpO1xuICAgICAgICBsZXQgbHZlYyA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDEpLm5vcm1hbGl6ZSgpO1xuICAgICAgICB0aGlzLmxpZ2h0LnBvc2l0aW9uLnNldChsdmVjLngsIGx2ZWMueSwgbHZlYy56KTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQodGhpcy5saWdodCk7XG5cbiAgICAgICAgLy/jg5Hjg7zjg4bjgqPjgq/jg6tcbiAgICAgICAgbGV0IHBhcnRpY2xlTnVtID0gMTAwMDtcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheShwYXJ0aWNsZU51bSAqIDMpO1xuICAgICAgICBjb25zdCBzcGhlcmVUYXJnZXRzID0gbmV3IEFycmF5KHBhcnRpY2xlTnVtKTtcbiAgICAgICAgY29uc3QgaWNvc2FoZWRyb25UYXJnZXRzID0gbmV3IEFycmF5KHBhcnRpY2xlTnVtKTtcbiAgICAgICAgY29uc3QgY2lyY2xlVGFyZ2V0cyA9IG5ldyBBcnJheShwYXJ0aWNsZU51bSk7XG5cblxuICAgICAgICAvLyDliJ3mnJ/kvY3nva7vvIjljp/ngrnvvInjgajnkIPpnaLkuIrjga7nm67mqJnluqfmqJnjgpLoqIjnrpdcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZU51bTsgKytpKSB7XG4gICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDNdID0gMDtcbiAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDFdID0gMDtcbiAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDJdID0gMDtcblxuICAgICAgICAgICAgY29uc3QgcGkgPSBNYXRoLmFjb3MoMiAqIE1hdGgucmFuZG9tKCkgLSAxKTtcbiAgICAgICAgICAgIGNvbnN0IHRoZXRhID0gMiAqIE1hdGguUEkgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgY29uc3QgciA9IDc7XG4gICAgICAgICAgICBzcGhlcmVUYXJnZXRzW2ldID0ge1xuICAgICAgICAgICAgICAgIHg6IHIgKiBNYXRoLnNpbihwaSkgKiBNYXRoLmNvcyh0aGV0YSksXG4gICAgICAgICAgICAgICAgeTogciAqIE1hdGguc2luKHBpKSAqIE1hdGguc2luKHRoZXRhKSxcbiAgICAgICAgICAgICAgICB6OiByICogTWF0aC5jb3MocGkpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnlJY29zYWhlZHJvbiA9IG5ldyBUSFJFRS5JY29zYWhlZHJvbkdlb21ldHJ5KDQsIDEpO1xuICAgICAgICAgICAgY29uc3QgaWNvUG9zID0gZ2VvbWV0cnlJY29zYWhlZHJvbi5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCBpY29JbmRleCA9IGkgJSBpY29Qb3MuY291bnQ7XG4gICAgICAgICAgICBpY29zYWhlZHJvblRhcmdldHNbaV0gPSB7XG4gICAgICAgICAgICAgICAgeDogaWNvUG9zLmdldFgoaWNvSW5kZXgpLFxuICAgICAgICAgICAgICAgIHk6IGljb1Bvcy5nZXRZKGljb0luZGV4KSxcbiAgICAgICAgICAgICAgICB6OiBpY29Qb3MuZ2V0WihpY29JbmRleClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIOODiOODvOODqeOCue+8iOOCj+OBo+OBi++8ieS4iuOBruW6p+aomVxuICAgICAgICAgICAgLy8gVG9ydXNHZW9tZXRyeeOBruODkeODqeODoeODvOOCv1xuICAgICAgICAgICAgY29uc3QgdG9ydXNSID0gMjtcbiAgICAgICAgICAgIGNvbnN0IHRvcnVzVHViZSA9IDAuNTtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gMiAqIE1hdGguUEkgKiAoaSAvIHBhcnRpY2xlTnVtKTtcbiAgICAgICAgICAgIGNpcmNsZVRhcmdldHNbaV0gPSB7XG4gICAgICAgICAgICAgICAgeDogKHRvcnVzUiArIHRvcnVzVHViZSAqIE1hdGguY29zKHRoZXRhKSkgKiBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgICAgICAgICAgeTogKHRvcnVzUiArIHRvcnVzVHViZSAqIE1hdGguY29zKHRoZXRhKSkgKiBNYXRoLnNpbihhbmdsZSksXG4gICAgICAgICAgICAgICAgejogdG9ydXNUdWJlICogTWF0aC5zaW4odGhldGEpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZ2VvbWV0cnlwID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgICAgIGdlb21ldHJ5cC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIDMpKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxwID0gbmV3IFRIUkVFLlBvaW50c01hdGVyaWFsKHsgY29sb3I6IDB4ZmZmZmZmLCBzaXplOiAwLjIgfSk7XG4gICAgICAgIGNvbnN0IHBvaW50c3AgPSBuZXcgVEhSRUUuUG9pbnRzKGdlb21ldHJ5cCwgbWF0ZXJpYWxwKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQocG9pbnRzcCk7XG5cblxuICAgICAgICBjb25zdCBnZW9tZXRyeUljb3NhaGVkcm9uID0gbmV3IFRIUkVFLkljb3NhaGVkcm9uR2VvbWV0cnkoMywgMSk7XG4gICAgICAgIGdlb21ldHJ5SWNvc2FoZWRyb24uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICAgICAgICAvL2NvbnN0IGljb1BhcnRpY2xlR2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcblxuICAgICAgICAvL2dlb21ldHJ5MC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIDMpKTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxJY29zYWhlZHJvbiA9IG5ldyBUSFJFRS5Qb2ludHNNYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiwgc2l6ZTogMC4yIH0pO1xuICAgICAgICBjb25zdCBwb2ludHNJY29zYWhlZHJvbiA9IG5ldyBUSFJFRS5Qb2ludHMoZ2VvbWV0cnlJY29zYWhlZHJvbiwgbWF0ZXJpYWxJY29zYWhlZHJvbik7XG4gICAgICAgIC8vdGhpcy5zY2VuZS5hZGQocG9pbnRzSWNvc2FoZWRyb24pO1xuXG4gICAgICAgIGNvbnN0IGdlb21ldHJ5Y2lyY2xlID0gbmV3IFRIUkVFLlRvcnVzR2VvbWV0cnkoKTtcbiAgICAgICAgZ2VvbWV0cnljaXJjbGUuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLCAzKSk7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsY2lyY2xlID0gbmV3IFRIUkVFLlBvaW50c01hdGVyaWFsKHsgY29sb3I6IDB4ZmZmZmZmLCBzaXplOiAwLjIgfSk7XG4gICAgICAgIGNvbnN0IHBvaW50c2NpcmNsZSA9IG5ldyBUSFJFRS5Qb2ludHMoZ2VvbWV0cnljaXJjbGUsIG1hdGVyaWFsY2lyY2xlKTtcbiAgICAgICAgLy90aGlzLnNjZW5lLmFkZChwb2ludHNjaXJjbGUpO1xuXG4gICAgICAgIC8v44Ki44OL44Oh44O844K344On44Oz55SoXG4gICAgICAgIGxldCB0d2Vlbk9iaiA9IHsgdDogMCB9O1xuXG4gICAgICAgIC8vIOWOn+eCueKGkueQg+mdolxuICAgICAgICBjb25zdCB0b1NwaGVyZSA9IG5ldyBUV0VFTi5Ud2Vlbih0d2Vlbk9iailcbiAgICAgICAgICAgIC50byh7IHQ6IDEgfSwgMjAwMClcbiAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLkVsYXN0aWMuT3V0KVxuICAgICAgICAgICAgLm9uVXBkYXRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlTnVtOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzXSA9IHNwaGVyZVRhcmdldHNbaV0ueCAqIHR3ZWVuT2JqLnQ7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDFdID0gc3BoZXJlVGFyZ2V0c1tpXS55ICogdHdlZW5PYmoudDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMl0gPSBzcGhlcmVUYXJnZXRzW2ldLnogKiB0d2Vlbk9iai50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBnZW9tZXRyeXAuYXR0cmlidXRlcy5wb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyDnkIPpnaLihpLlpJrpnaLkvZNcbiAgICAgICAgY29uc3QgdG9JY29zYWhlZHJvbiA9IG5ldyBUV0VFTi5Ud2Vlbih0d2Vlbk9iailcbiAgICAgICAgICAgIC50byh7IHQ6IDIgfSwgMjAwMClcbiAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLkVsYXN0aWMuT3V0KVxuICAgICAgICAgICAgLm9uVXBkYXRlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlTnVtOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzXSA9IGljb3NhaGVkcm9uVGFyZ2V0c1tpXS54ICogdHdlZW5PYmoudDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMV0gPSBpY29zYWhlZHJvblRhcmdldHNbaV0ueSAqIHR3ZWVuT2JqLnQ7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDJdID0gaWNvc2FoZWRyb25UYXJnZXRzW2ldLnogKiB0d2Vlbk9iai50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBnZW9tZXRyeXAuYXR0cmlidXRlcy5wb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyDlpJrpnaLkvZPihpLjgo/jgaPjgYtcbiAgICAgICAgY29uc3QgdG9jaXJjbGUgPSBuZXcgVFdFRU4uVHdlZW4odHdlZW5PYmopXG4gICAgICAgICAgICAudG8oeyB0OiAzIH0sIDIwMDApXG4gICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5FbGFzdGljLk91dClcbiAgICAgICAgICAgIC5vblVwZGF0ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0aWNsZU51bTsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogM10gPSBjaXJjbGVUYXJnZXRzW2ldLnggKiB0d2Vlbk9iai50O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAxXSA9IGNpcmNsZVRhcmdldHNbaV0ueSAqIHR3ZWVuT2JqLnQ7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDJdID0gY2lyY2xlVGFyZ2V0c1tpXS56ICogdHdlZW5PYmoudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZ2VvbWV0cnlwLmF0dHJpYnV0ZXMucG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLy8g44KP44Gj44GL4oaS5Y6f54K5XG4gICAgICAgIC8vIGNvbnN0IHRvMCA9IG5ldyBUV0VFTi5Ud2Vlbih0d2Vlbk9iailcbiAgICAgICAgLy8gICAgIC50byh7IHQ6IDAgfSwgMjAwMClcbiAgICAgICAgLy8gICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLkVsYXN0aWMuT3V0KVxuICAgICAgICAvLyAgICAgLm9uVXBkYXRlKCgpID0+IHtcbiAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlTnVtOyArK2kpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzXSA9IHNwaGVyZVRhcmdldHNbaV0ueCAqIHR3ZWVuT2JqLnQ7XG4gICAgICAgIC8vICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDFdID0gc3BoZXJlVGFyZ2V0c1tpXS55ICogdHdlZW5PYmoudDtcbiAgICAgICAgLy8gICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMl0gPSBzcGhlcmVUYXJnZXRzW2ldLnogKiB0d2Vlbk9iai50O1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICBnZW9tZXRyeXAuYXR0cmlidXRlcy5wb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICAgIC8vICAgICB9KTtcblxuICAgICAgICB0b1NwaGVyZS5jaGFpbih0b0ljb3NhaGVkcm9uKTtcbiAgICAgICAgdG9JY29zYWhlZHJvbi5jaGFpbih0b2NpcmNsZSk7XG4gICAgICAgIHRvY2lyY2xlLmNoYWluKHRvU3BoZXJlKTtcbiAgICAgICAgLy90bzAuY2hhaW4odG9TcGhlcmUpO1xuICAgICAgICB0b1NwaGVyZS5zdGFydCgpO1xuXG5cbiAgICAgICAgLy/kurpcbiAgICAgICAgY29uc3QgcmluZ3MgPSAxNTtcbiAgICAgICAgY29uc3QgYmFzZVJhZGl1cyA9IDM7IC8vIOS4gOeVquWGheWBtOOBruWNiuW+hFxuICAgICAgICBjb25zdCBwZW5saWdodHM6IFRIUkVFLk1lc2hbXSA9IFtdO1xuXG4gICAgICAgIHRoaXMucGVubGlnaHRHcm91cCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcmluZ3M7IHIrKykge1xuICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gYmFzZVJhZGl1cyArIHIgKiAwLjI7IC8vIOWkluWBtOOBq+OBhOOBj+OBu+OBqeWNiuW+hOOBjOWkp+OBjeOBj+OBquOCi1xuICAgICAgICAgICAgY29uc3QgbnVtUGVyUmluZyA9IDEyICsgciAqIDU7IC8vIOWkluWBtOOBu+OBqeWkmuOBj+mFjee9rlxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVBlclJpbmc7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gKGkgLyBudW1QZXJSaW5nKSAqIE1hdGguUEkgKiAyO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGVubGlnaHQgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBiZWFtR2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjA1LCAwLjA1LCAwLjMsIDE2KTtcbiAgICAgICAgICAgICAgICBjb25zdCBiZWFtTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBiZWFtID0gbmV3IFRIUkVFLk1lc2goYmVhbUdlb21ldHJ5LCBiZWFtTWF0ZXJpYWwpO1xuICAgICAgICAgICAgICAgIGJlYW0ucG9zaXRpb24ueSA9IC0xLjg7XG5cbiAgICAgICAgICAgICAgICBwZW5saWdodC5hZGQoYmVhbSk7XG4gICAgICAgICAgICAgICAgcGVubGlnaHRzLnB1c2goYmVhbSk7XG5cbiAgICAgICAgICAgICAgICAvLyDlhoblkajkuIrjgavphY3nva5cbiAgICAgICAgICAgICAgICBwZW5saWdodC5wb3NpdGlvbi54ID0gcmFkaXVzICogTWF0aC5jb3MoYW5nbGUpO1xuICAgICAgICAgICAgICAgIHBlbmxpZ2h0LnBvc2l0aW9uLnogPSByYWRpdXMgKiBNYXRoLnNpbihhbmdsZSk7XG4gICAgICAgICAgICAgICAgcGVubGlnaHQucG9zaXRpb24ueSA9IC0yLjI7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnBlbmxpZ2h0R3JvdXAuYWRkKHBlbmxpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMucGVubGlnaHRHcm91cCk7XG5cbiAgICAgICAgLy/niannkIbmvJTnrpfjgpLooYzjgYbjgZ/jgoHjga7opoHntKDjgZ/jgaFcbiAgICAgICAgY29uc3Qgd29ybGQgPSBuZXcgQ0FOTk9OLldvcmxkKHsgZ3Jhdml0eTogbmV3IENBTk5PTi5WZWMzKDAsIC05LjgyLCAwKSB9KTtcbiAgICAgICAgd29ybGQuZGVmYXVsdENvbnRhY3RNYXRlcmlhbC5mcmljdGlvbiA9IDAuMTsvL+aRqeaTpuS/guaVsFxuICAgICAgICB3b3JsZC5kZWZhdWx0Q29udGFjdE1hdGVyaWFsLnJlc3RpdHV0aW9uID0gMC4xOy8v5Y+N55m65L+C5pWwXG5cbiAgICAgICAgLy8g546J44KS5a6a5pyf55qE44Gr55m65bCEXG4gICAgICAgIGxldCBiYWxsc21lc2g6IFRIUkVFLk1lc2hbXSA9IFtdOy8v6KaL44Gf55uuXG4gICAgICAgIGxldCBiYWxsc2JvZHk6IENBTk5PTi5Cb2R5W10gPSBbXTsvL2J1dHVyaVxuICAgICAgICBjb25zdCBkcm9wQ29uZmV0dGkgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IDAuMSwgaGVpZ2h0ID0gMC4xLCBkZXB0aCA9IDAuMDE7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG5ldyBUSFJFRS5Db2xvcihNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpLCBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3IsIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUgfSk7XG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3aWR0aCwgaGVpZ2h0LCBkZXB0aCk7XG4gICAgICAgICAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcblxuICAgICAgICAgICAgLy8g44Op44Oz44OA44Og44Gq5LiK56m65L2N572u44GL44KJ6JC944Go44GZXG4gICAgICAgICAgICBjb25zdCB4ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMTU7XG4gICAgICAgICAgICBjb25zdCB5ID0gMTU7XG4gICAgICAgICAgICBjb25zdCB6ID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMTU7XG4gICAgICAgICAgICBtZXNoLnBvc2l0aW9uLnNldCh4LCB5LCB6KTtcblxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQobWVzaCk7XG4gICAgICAgICAgICBiYWxsc21lc2gucHVzaChtZXNoKTtcblxuICAgICAgICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgQ0FOTk9OLkJveChuZXcgQ0FOTk9OLlZlYzMod2lkdGggLyAyLCBoZWlnaHQgLyAyLCBkZXB0aCAvIDIpKTtcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiAwLjEsIHNoYXBlIH0pO1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbi5zZXQoeCwgeSwgeik7XG5cbiAgICAgICAgICAgIC8vIOe0meWQuembquOBo+OBveOBj+OChuOBo+OBj+OCiuiQveS4i+OBl+OBquOBjOOCieWbnui7olxuICAgICAgICAgICAgYm9keS52ZWxvY2l0eS5zZXQoMCwgLTAuNSAtIE1hdGgucmFuZG9tKCksIDApO1xuICAgICAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkuc2V0KFxuICAgICAgICAgICAgICAgIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDUsXG4gICAgICAgICAgICAgICAgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogNSxcbiAgICAgICAgICAgICAgICAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA1XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBib2R5LmxpbmVhckRhbXBpbmcgPSAwLjk7ICAgICAvLyDnqbrmsJfmirXmipdcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhckRhbXBpbmcgPSAwLjY7ICAgIC8vIOWbnui7oua4m+ihsFxuXG4gICAgICAgICAgICB3b3JsZC5hZGRCb2R5KGJvZHkpO1xuICAgICAgICAgICAgYmFsbHNib2R5LnB1c2goYm9keSk7XG4gICAgICAgIH07XG4gICAgICAgIHNldEludGVydmFsKGRyb3BDb25mZXR0aSwgMTAwKTsgLy8gMC4z56eS44GK44GN44GrMeaemuiQveOBqOOBmVxuICAgICAgICAvL+W6iuOCkuS9nOOCi1xuICAgICAgICBjb25zdCBwaG9uZ01hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgY29sb3I6IDB4MDAwMDAwIH0pO1xuICAgICAgICBjb25zdCBwbGFuZUdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMTUsIDE1KTtcbiAgICAgICAgY29uc3QgcGxhbmVNZXNoID0gbmV3IFRIUkVFLk1lc2gocGxhbmVHZW9tZXRyeSwgcGhvbmdNYXRlcmlhbCk7XG4gICAgICAgIHBsYW5lTWVzaC5tYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTsgLy8g5Lih6Z2iXG4gICAgICAgIHBsYW5lTWVzaC5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG4gICAgICAgIHBsYW5lTWVzaC5wb3NpdGlvbi55ID0gLTQuMjtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQocGxhbmVNZXNoKTtcbiAgICAgICAgLy/luorjga7niannkIbmvJTnrpdcbiAgICAgICAgY29uc3QgcGxhbmVTaGFwZSA9IG5ldyBDQU5OT04uUGxhbmUoKVxuICAgICAgICBjb25zdCBwbGFuZUJvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiAwIH0pXG4gICAgICAgIHBsYW5lQm9keS5hZGRTaGFwZShwbGFuZVNoYXBlKVxuICAgICAgICBwbGFuZUJvZHkucG9zaXRpb24uc2V0KHBsYW5lTWVzaC5wb3NpdGlvbi54LCBwbGFuZU1lc2gucG9zaXRpb24ueSwgcGxhbmVNZXNoLnBvc2l0aW9uLnopO1xuICAgICAgICBwbGFuZUJvZHkucXVhdGVybmlvbi5zZXQocGxhbmVNZXNoLnF1YXRlcm5pb24ueCwgcGxhbmVNZXNoLnF1YXRlcm5pb24ueSwgcGxhbmVNZXNoLnF1YXRlcm5pb24ueiwgcGxhbmVNZXNoLnF1YXRlcm5pb24udyk7XG4gICAgICAgIHdvcmxkLmFkZEJvZHkocGxhbmVCb2R5KVxuICAgICAgICAvLyDmr47jg5Xjg6zjg7zjg6Djga51cGRhdGXjgpLlkbzjgpPjgafvvIzmm7TmlrBcbiAgICAgICAgLy8gcmVxZXN0QW5pbWF0aW9uRnJhbWUg44Gr44KI44KK5qyh44OV44Os44O844Og44KS5ZG844G2XG5cbiAgICAgICAgY29uc3QgY2xvY2sgPSBuZXcgVEhSRUUuQ2xvY2soKTtcbiAgICAgICAgbGV0IHQgPSAwO1xuICAgICAgICBsZXQgdXBkYXRlOiBGcmFtZVJlcXVlc3RDYWxsYmFjayA9ICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBodWUgPSAodGltZSAqIDAuMDAwMSkgJSAxLjA7IC8vIDDjgJwx44Gu56+E5Zuy44Gn44Or44O844OXXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgICAgICAgICAgY29sb3Iuc2V0SFNMKGh1ZSwgMS4wLCAwLjUpOyAvLyDlvanluqYxLCDmmI7luqYwLjXvvIjoibLnm7jjgaDjgZHlpInljJbvvIlcblxuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLnNpbih0aW1lICogMC4wMSkgKiAwLjM7IC8vIOODmuODs+OBruaMr+OCiuW5heOBqOmAn+OBleiqv+aVtFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwZW5saWdodHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IChwZW5saWdodHNbaV0gYXMgVEhSRUUuTWVzaCkubWF0ZXJpYWwgYXMgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuY29sb3IuY29weShjb2xvcik7XG4gICAgICAgICAgICAgICAgcGVubGlnaHRzW2ldLnJvdGF0aW9uLnogPSBhbmdsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGdyb3VwMC5yb3RhdGlvbi55ICs9IDAuMDE7XG4gICAgICAgICAgICBUV0VFTi51cGRhdGUoKTsvL+i/veWKoOWIhlxuICAgICAgICAgICAgd29ybGQuZml4ZWRTdGVwKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhbGxzbWVzaC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIOS9jee9ruOBruabtOaWsFxuICAgICAgICAgICAgICAgIGJhbGxzbWVzaFtpXS5wb3NpdGlvbi5zZXQoXG4gICAgICAgICAgICAgICAgICAgIGJhbGxzYm9keVtpXS5wb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgICAgICBiYWxsc2JvZHlbaV0ucG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICAgICAgYmFsbHNib2R5W2ldLnBvc2l0aW9uLnpcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgLy8g5Zue6Lui44Gu5pu05pawXG4gICAgICAgICAgICAgICAgYmFsbHNtZXNoW2ldLnF1YXRlcm5pb24uc2V0KFxuICAgICAgICAgICAgICAgICAgICBiYWxsc2JvZHlbaV0ucXVhdGVybmlvbi54LFxuICAgICAgICAgICAgICAgICAgICBiYWxsc2JvZHlbaV0ucXVhdGVybmlvbi55LFxuICAgICAgICAgICAgICAgICAgICBiYWxsc2JvZHlbaV0ucXVhdGVybmlvbi56LFxuICAgICAgICAgICAgICAgICAgICBiYWxsc2JvZHlbaV0ucXVhdGVybmlvbi53XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZSk7XG4gICAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IG5ldyBUaHJlZUpTQ29udGFpbmVyKCk7XG5cbiAgICBsZXQgdmlld3BvcnQgPSBjb250YWluZXIuY3JlYXRlUmVuZGVyZXJET00oNjQwLCA0ODAsIG5ldyBUSFJFRS5WZWN0b3IzKDMuMCwgMSwgNCkpOy8v55S76Z2i44Gu5bmF44Go44Kr44Oh44Op44Gu5L2N572uXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh2aWV3cG9ydCk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjZ3ByZW5kZXJpbmdcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY2dwcmVuZGVyaW5nXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc190d2VlbmpzX3R3ZWVuX2pzX2Rpc3RfdHdlZW5fZXNtX2pzLW5vZGVfbW9kdWxlc19jYW5ub24tZXNfZGlzdF9jYW5ub24tZXMtMTgwMTYzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2FwcC50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9