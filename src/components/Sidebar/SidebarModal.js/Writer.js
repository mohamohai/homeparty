import { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";



function SidebarModalWrite(props){


return(
    <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>글쓰기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>내용</Form.Label>
              <Form.Control
                as="textarea"
                rows={10}
                autoFocus
                onChange={(e) => setWriteContent(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="일단 공간이 남아서 넣어봤는데 해쉬태그 같은걸로 하면 좋을 거 같아요"
                value={hashTagText}
                onChange={(e) => sethashTagText(e.target.value)}
                onKeyPress={(e) => CheckEnter(e)}
                className="hashbox"
              />
              {hasharr.map((row, key) => {
                return (
                  <Hashbox key={key} className={`hash${row}`} onClick={()=>hasharrDel(row,key,`hash${row}`)}>
                    #{row}
                   
                    </Hashbox>
                );
              })}
            </Form.Group>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">
                &nbsp;&nbsp; Small &nbsp;&nbsp;
              </InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>이미지 파일 업로드 (1개)</Form.Label>
              <Form.Control type="file" size="sm" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              submitDoc();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
)}export default SidebarModalWrite