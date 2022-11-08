// Math
import { Color4, Color3 } from "@babylonjs/core/Maths/math.color";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Space } from "@babylonjs/core/Maths/math.axis";
import { Angle } from "@babylonjs/core/Maths/math.path";

// Materials
import { CubeTexture, Texture } from "@babylonjs/core/Materials/Textures";
import { StandardMaterial } from "@babylonjs/core/Materials/standardMaterial";

// Actions
import { ActionManager } from "@babylonjs/core/Actions/actionManager";
import { ExecuteCodeAction } from "@babylonjs/core/Actions/directActions";

// Meshes
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { TransformNode } from "@babylonjs/core/Meshes/transformNode";
import { AbstractMesh } from "@babylonjs/core/Meshes/abstractMesh";
import { Mesh } from "@babylonjs/core/Meshes/mesh";

// GUI 2D
import { AdvancedDynamicTexture } from "@babylonjs/gui/2D/advancedDynamicTexture";
import { TextBlock } from "@babylonjs/gui/2D/controls/textBlock";
import { StackPanel } from "@babylonjs/gui/2D/controls/stackPanel";
import { Container } from "@babylonjs/gui/2D/controls/container";
import { Control } from "@babylonjs/gui/2D/controls/control";
import { TextWrapping } from "@babylonjs/gui/2D/controls/textBlock";

// Animations
import { Animation, CubicEase, EasingFunction } from "@babylonjs/core/Animations";

// Others
import { Engine } from "@babylonjs/core/Engines/engine";
import { Database } from "@babylonjs/core/Offline/database";
import { SceneLoader } from "@babylonjs/core/Loading/sceneLoader";
import { GlowLayer } from "@babylonjs/core/Layers/glowLayer";
import { Scene } from "@babylonjs/core/scene";
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { Ray } from "@babylonjs/core/Culling/ray";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { PointerEventTypes } from "@babylonjs/core/Events/pointerEvents";
import { DefaultCollisionCoordinator } from "@babylonjs/core/Collisions/collisionCoordinator";

import "@babylonjs/loaders/glTF";

const BABYLON: any = {   
    // Maths
    Color4,
    Color3,
    Vector3,
    Space,
    Angle,
     
    // Materials
    StandardMaterial,
    CubeTexture,
    Texture,

    // Actions
    ActionManager,
    ExecuteCodeAction,
    
    // Meshes
    TransformNode,
    Mesh,
    AbstractMesh,
    MeshBuilder,

    // GUI 2D
    GUI: {
        AdvancedDynamicTexture,
        TextBlock,
        StackPanel,
        Container,
        Control,
        TextWrapping
    },
    
    // Animations
    Animation,
    CubicEase,
    EasingFunction,

    // Others
    Database,
    Engine,
    SceneLoader,
    Scene,
    Ray,
    FreeCamera,
    PointerEventTypes,
    HemisphericLight,
    GlowLayer,
    DefaultCollisionCoordinator
}

window['BABYLON'] =  BABYLON;
