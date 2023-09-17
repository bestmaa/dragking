# DragKing

The DragKing library empowers developers to easily implement drag-and-drop functionality for HTML elements within a specified container. This versatile tool makes it effortless for developers to enable dragging of HTML elements, enhancing the interactivity of web applications. DragKing offers seamless integration and extensive customization options, allowing developers to create dynamic and engaging user interfaces effortlessly.

## Features

- **Drag-and-Drop**: Implement drag-and-drop functionality for HTML elements with ease.
- **Customization**: Customize the drag behavior to suit your application's needs.
- **Effortless Integration**: Easily integrate DragKing into your web projects.
- **Enhanced User Experience**: Create dynamic and interactive user interfaces.
- **Versatile Usage**: Suitable for a wide range of web applications.

## Installation

You can install DragKing using npm:

```bash
npm install dragking
```

## Usage

To get started with DragKing, follow these steps:

1. **Installation**: Install DragKing as mentioned above.

2. **Initialization**:

   ```javascript
   import  Drag  from "dragking";

   let drag = new Drag("#drag-area", ".drag-item");
   ```

3. **Start Dragging**:

   Call the `start()` method to enable drag-and-drop functionality:

   ```javascript
   drag.start();
   ```

4. **HTML Structure**:

   Ensure you have the necessary HTML structure with a container and draggable elements, as shown below:

   ```html
   <div id="drag-area" style="border: 1px solid black; width: 500px; height: 500px; margin-left: 100px;"></div>
   <img src="./icon.png" class="drag-item" alt="" width="60px" srcset=""/>
   <!-- Add more draggable elements as needed -->
   ```

View the demo [DragKing demo]().
For more detailed information and examples, please refer to the [DragKing Documentation](#link-to-documentation).

## Explanation of `new Drag("#drag-area", ".drag-item")`

The code `new Drag("#drag-area", ".drag-item")` creates a new instance (object) of the `Drag` class, enabling drag-and-drop functionality within your web application. Here's an explanation of this code:

1. `"#drag-area"`: This CSS selector targets the container element where drag-and-drop functionality will be enabled. It uses the `#` symbol followed by `drag-area`, typically representing the `id` attribute of an HTML element. This means it will target a unique HTML element with an `id` attribute equal to "drag-area" as the drag-and-drop container.

2. `".drag-item"`: This selector targets the draggable items within the specified container. It selects the HTML elements that users can drag within the defined container, allowing interactive user experiences.

Now, with this code, you can easily implement drag-and-drop functionality in your web application. Enjoy enhanced interactivity and dynamic user interfaces!


