import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

class HelpPage extends StatefulWidget {
  @override
  _HelpPageState createState() => _HelpPageState();
}

class _HelpPageState extends State<HelpPage> {

  call911() async {
    const url = 'tel:911';
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: new AppBar(
          title: new Text("Help Tracker"),
          backgroundColor: Colors.redAccent,
        ),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            // this container wil be the map
            Column(children: [
              Container(
                decoration: BoxDecoration(boxShadow: <BoxShadow>[
                  BoxShadow(
                    color: Colors.grey[300],
                    offset: Offset(0.0, 2.0),
                    blurRadius: 5.0,
                  ),
                ], color: Colors.redAccent),
                height: 300,
              ),
              Container(
                  margin: EdgeInsets.only(top: 20),
                  child: Text("Help is coming.",
                      style: TextStyle(
                          fontSize: 20, fontWeight: FontWeight.bold))),
              Container(
                  padding: EdgeInsets.all(20),
                  margin: EdgeInsets.only(top: 10),
                  child: Text(
                      "We're sorry about your situation. Help is on the way, but if you need to call anyone the button below should help. Good luck!",
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 18))),
            ]),

            Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                Container(
                    margin: EdgeInsets.only(bottom: 30),
                    child: FloatingActionButton(
                      child: const Icon(Icons.phone),
                      backgroundColor: Colors.green,
                      onPressed: call911,
                    ))
              ],
            )
          ],
        ));
  }
}
