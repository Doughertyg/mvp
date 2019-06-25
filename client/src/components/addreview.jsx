import React from 'react';

const Addreview = (props) => (

	<div className="overlay" onClick={props.toggle}>
		<div className="modal-content" onClick={props.toggle}>
					<div className="modal" onClick={(e) => e.stopPropagation()}>
						<form className="addreview-form">
							<label>Appearance:
							<input type="text" />
							<select>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
							</label>
							<label>Aroma:
							<input type="text" />
							<select>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
							</label>
							<label>Taste:
							<input type="text" />
							<select>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
							</label>
							<label>Mouthfeel:
							<input type="text" />
							<select>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
							</label>
							<label>Overall:
							<input type="text" />
							<select>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</select>
							</label>
							<label>Format:
							<select>
								<option>on draft</option>
								<option>12 oz. bottle/can</option>
								<option>16 oz. bottle/can</option>
								<option>22 oz. bomber</option>
								<option>750 ml bottle</option>
							</select>
							</label>
							<label>Brew date:
							<input type="text" />
							</label>
							<label>Batch #:
							<input type="text" />
							</label>
							<label>Upload a picture:
							<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
							</label>
							<label>Your Username:
							<input type="text" />
							</label>
							<label>Avatar Photo
							<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
							</label>
							<input type="submit" />
						</form>
					</div>
		</div>
	</div>

)

export default Addreview;