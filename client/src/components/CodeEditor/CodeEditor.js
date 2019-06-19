import React from "react";
import "./CodeEditor.css";
import $ from "jquery";

const CodeEditor = () => (
    <>
        <fieldset>
            <img src="https://raw.githubusercontent.com/ajaxorg/ace/master/api/resources/images/ace_logo.png"/>
            <a href="https://ace.c9.io/" target="blank">ace.c9.io</a>
            <label>Theme:
                <select id="ace-theme" size="1">

                    <optgroup label="dark">
                        <option value="monokai">monokai</option>
                    </optgroup>
                </select>
            </label>

            <label>Mode:
                <select id="ace-mode">
                    <option value="JavaScript">JavaScript</option>
                </select>
            </label>

        </fieldset>
        <div className="wrapper">
            <code id="ace-editorid">
            </code>
        </div>
    </>);
export default CodeEditor;
