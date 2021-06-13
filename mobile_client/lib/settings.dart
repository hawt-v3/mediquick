import 'dart:io';

import 'package:flutter/material.dart';
import 'package:path_provider/path_provider.dart';
import 'package:toast/toast.dart';

class SettingsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final nameController = TextEditingController();
    final notesController = TextEditingController();

    _save() async {
      var directory = await getApplicationDocumentsDirectory();
      final path = directory.path;
      final nameFile = File('$path/name.txt');
      final notesFile = File('$path/notes.txt');

      String name = nameController.text;
      String notes = notesController.text;

      nameFile.writeAsString(name);
      notesFile.writeAsString(notes);

      Toast.show("saved", context,
          duration: Toast.LENGTH_SHORT, gravity: Toast.TOP);
    }

    return new Scaffold(
      appBar: new AppBar(
        title: new Text("User Settings"),
        backgroundColor: Colors.brown,
      ),
      body: Container(
          padding: EdgeInsets.all(30),
          child:
              Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            TextField(
              controller: nameController,
              decoration: InputDecoration(
                  border: UnderlineInputBorder(), labelText: 'Name'),
            ),
            Container(
                margin: EdgeInsets.only(top: 5),
                child: TextField(
                  decoration: InputDecoration(
                      border: UnderlineInputBorder(),
                      labelText: 'Additional Notes'),
                )),
            Container(
                margin: EdgeInsets.only(top: 20),
                child: RaisedButton(
                    child: Text("Save"),
                    onPressed: _save,
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(8)),
                    color: Colors.brown[400],
                    textColor: Colors.white))
          ])),
    );
  }
}
