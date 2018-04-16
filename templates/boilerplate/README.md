# Boilerplate Template

1. You must copy the folder named `boilerplate` to your Shinobi directory in the `web/templates` folder. If you do not have a templates folder then you must create one.

2. Create the `renderPaths` object inside `conf.json`. If it already exists then remove the old one and place this one.
```
"renderPaths": {
  "home" : "templates/boilerplate/views/index",
  "handler" : "templates/boilerplate/handler"
}
```
3. Your `conf.json` file may look like this afterward.

```
{
  "port": 8080,
  "addStorage": [
    {
      "name": "second",
      "path": "__DIR__/videos2"
    }
  ],
  "db": {
    "host": "127.0.0.1",
    "user": "majesticflame",
    "password": "",
    "database": "ccio",
    "port": 3306
  },
  "mail": {
    "service": "gmail",
    "auth": {
      "user": "your_email@gmail.com",
      "pass": "your_password_or_app_specific_password"
    }
  },
  "cron": {
    "key": "change_this_to_something_very_random__just_anything_other_than_this"
  },
  "pluginKeys": {
    "Motion": "change_this_to_something_very_random____make_sure_to_match__/plugins/motion/conf.json",
    "OpenCV": "change_this_to_something_very_random____make_sure_to_match__/plugins/opencv/conf.json",
  },
  "renderPaths": {
      "home" : "templates/boilerplate/views/index",
      "handler" : "templates/boilerplate/handler"
  }
}
```