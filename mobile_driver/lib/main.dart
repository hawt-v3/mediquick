import 'dart:async';
import 'dart:io';

import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:mediquick_client/help.dart';
import 'package:path_provider/path_provider.dart';

import 'settings.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.

  // Define an async function to initialize FlutterFire

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Mediquick',
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
      home: MyHomePage(title: 'Mediquick application'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String _name = "Ahmed"; // placeholder
  bool _init = false;

  void initializeFlutterFire() async {
    await Firebase.initializeApp();

    setState(() {
      _init = true;
    });
  }

  getAndSetName() async {
    var directory = await getApplicationDocumentsDirectory();
    final path = directory.path;
    final nameFile = File('$path/name.txt');

    if (nameFile.existsSync()) debugPrint(nameFile.readAsStringSync());

    // start the timer
    initializeFlutterFire();

    setState(() {
      _name = nameFile.existsSync() ? nameFile.readAsStringSync() : "Person";
    });
  }

  @mustCallSuper
  @protected
  void initState() {
    super.initState();

    Timer.periodic(new Duration(seconds: 3), (timer) {
      getAndSetName();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: FloatingActionButton(
          onPressed: () => Navigator.push(
              context, MaterialPageRoute(builder: (context) => SettingsPage())),
          child: const Icon(Icons.settings),
          backgroundColor: Colors.grey[600]),
      body: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              height: 300, // this is where the image will be shown
              decoration: BoxDecoration(
                color: Colors.redAccent,
              ),
            ),
            Container(
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.all(Radius.circular(14)),
                  boxShadow: <BoxShadow>[
                    BoxShadow(
                      color: Colors.grey[300],
                      offset: Offset(0.0, 1.0),
                      blurRadius: 5.0,
                    ),
                  ],
                ),
                margin: EdgeInsets.symmetric(horizontal: 50),
                transform: Matrix4.translationValues(0.0, -50.0, 0.0),
                padding: EdgeInsets.all(16.0),
                child: Column(
                  children: [
                    Text("Mediquick",
                        textAlign: TextAlign.center,
                        style: TextStyle(
                            fontWeight: FontWeight.bold, fontSize: 30)),
                    Container(
                        margin: EdgeInsets.only(top: 20),
                        child: Text('Help is coming, $_name!',
                            textAlign: TextAlign.center,
                            style: TextStyle(fontSize: 18))),
                  ],
                )),
            Container(
                margin: EdgeInsets.symmetric(horizontal: 50, vertical: 100),
                child: RaisedButton(
                  child: Text("Help me!", style: TextStyle(fontSize: 20)),
                  padding: EdgeInsets.all(12.0),
                  onPressed: () => Navigator.push(context,
                      MaterialPageRoute(builder: (context) => HelpPage())),
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(8)),
                  color: Colors.brown,
                  textColor: Colors.white,
                ))
          ]),
    );
  }
}
