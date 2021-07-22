# ionic-sdk-demo

Demo code for IONIC and Sendbird

### Working on iOS simulator

![Sendbird connected](https://raw.githubusercontent.com/warodri-sendbird/ionic-sdk-demo/main/src/assets/ionic-ios.png)


### The code

1) Run ```npm i sendbird``` to install libraries. All documentation here: 
https://sendbird.com/docs/chat/v3/javascript/getting-started/install-chat-sdk
 
2) Sample code added to ```explore-container.component.html```

```
    <!--
        SENDBIRD
    -->
    <div style="margin-top:2rem;">
        Connected to Sendbird: {{ connected ? 'Yes!' : 'Not yet...' }}
    </div>
```

2) Connection logic added to ```explore-container.component.ts```

Import sendbird first
```
    import * as SendBird from 'sendbird';
```

3) For this demo, we will create a variable for informing we are connected or not

```
    connected = false;
```

Define your application ID (from Sendbird Dashboard) and call ```connect()```

```
    ngOnInit() { 
        this.sb = new SendBird({ appId: 'YOUR SENDBIRD APPLICATION ID HERE' });
        this.connect();
    }
```

Define any user ID and connect

```
    connect() {
        this.sb.connect('ANY USER ID HERE', (user, error) => {
            if (error) {
                console.dir(error);                
                alert('Error connecting to Sendbird!');
            }
            this.connected = true;
        });
    }
```
