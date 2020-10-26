A tiny package to easily create a tree menu. 

### Example Usage

Include listree.min.css and listree.min.umd.js in the header and footer respectively. Make sure that the unordered list in the html has class-markers like below (Should be easy to generate via any server side templating language. ). Then just invoke `listree()`. It will scan the document for the class markers and convert the ul list into a tree

```html

<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://unpkg.com/listree/dist/listree.min.css"/>
    <title>LisTree</title>
  </head>
  <body>
    <ul class="listree">
        <li>
            <div class="listree-submenu-heading">Metrics</div>
            <ul class="listree-submenu-items">
                <li>
                    <div class="listree-submenu-heading">Daily Metrics</div>
                    <ul class="listree-submenu-items">
                    <li>
                        <div class="listree-submenu-heading">Daily Order Metrics</div>
                        <ul class="listree-submenu-items">
                        <li>
                            <div class="listree-submenu-heading">Categorywise Daily order metrics</div>
                            <ul class="listree-submenu-items">
                                <li>
                                    <a href="">Categorywise daily order count</a>
                                </li>
                                <li>
                                    <a href="">Categorywise daily bookings</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div class="listree-submenu-heading">Storewise Daily order metrics</div>
                            <ul class="listree-submenu-items">
                                <li>
                                    <a href="">Storewise daily order count</a>
                                </li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <div class="listree-submenu-heading">Daily Invoice Metrics</div>
                        <ul class="listree-submenu-items">
                            <li>
                                <div class="listree-submenu-heading">Categorywise Daily invoice metrics</div>
                                <ul class="listree-submenu-items">
                                    <li>
                                        <a href="">Categorywise daily invoice count</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div class="listree-submenu-heading">Storewise Daily invoice metrics</div>
                                <ul class="listree-submenu-items">
                                    <li>
                                        <a href="">Storewise daily invoice count</a>
                                    </li>
                                    <li>
                                        <a href="">Storewise daily revenue</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li>
                    <div class="listree-submenu-heading">Monthly Metrics</div>
                    <ul class="listree-submenu-items">
                        <li>
                            <div class="listree-submenu-heading">Monthly Order Metrics</div>
                            <ul class="listree-submenu-items">
                                <li>
                                    <div class="listree-submenu-heading">Categorywise Monthly order metrics</div>
                                    <ul class="listree-submenu-items">
                                        <li>
                                            <a href="">Categorywise monthly order count</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <div class="listree-submenu-heading">Storewise Monthly order metrics</div>
                                    <ul class="listree-submenu-items">
                                        <li>
                                            <a href="">Storewise monthly order count</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <div class="listree-submenu-heading">Settings</div>
            <ul class="listree-submenu-items">
                <li>
                    <div class="listree-submenu-heading">Personal Settings</div>
                    <ul class="listree-submenu-items">
                        <li><a href="">Password Settings</a></li>
                        <li><a href="">Viewing Preferences</a></li>
                    </ul>
                </li>
                <li>
                    <div class="listree-submenu-heading">Org Settings</div>
                    <ul class="listree-submenu-items">
                        <li><a href="">Teams</a></li>
                        <li><a href="">Billing</a></li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
    <script src="https://unpkg.com/listree/dist/listree.umd.min.js"></script>
    <script>
        listree();
    </script>
  </body>
</html>